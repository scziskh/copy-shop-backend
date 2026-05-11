const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.price_DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

const getPricing = async (req, res) => {
  try {
    const client = await pool.connect();
    const { rows } = await client.query(
      "SELECT * FROM print_prices ORDER BY path ASC, qty ASC",
    );
    client.release();

    const pricingData = {};

    rows.forEach((row) => {
      const keys = row.path.split(".");
      let current = pricingData;
      for (let i = 0; i < keys.length - 1; i++) {
        const key = keys[i];
        if (!current[key]) current[key] = {};
        current = current[key];
      }
      const lastKey = keys[keys.length - 1];
      const priceVal = Number(row.price);

      if (row.qty !== null) {
        if (!current[lastKey]) current[lastKey] = [];

        const tierObj = { qty: Number(row.qty), price: priceVal };
        if (row.meta) Object.assign(tierObj, row.meta);

        current[lastKey].push(tierObj);
      } else {
        if (row.meta) {
          current[lastKey] = { price: priceVal, ...row.meta };
        } else {
          current[lastKey] = priceVal;
        }
      }
    });

    return res.status(200).json(pricingData);
  } catch (error) {
    console.error("Помилка під час отримання прайсу з БД:", error);
    return res
      .status(500)
      .json({ error: "Помилка сервера при формуванні цін" });
  }
};

// routes/pricing.js
// (Верхню частину з const { Pool } та getPricing залишаємо без змін)

// Отримання плоского масиву для таблиці адмінки
const getPricingFlat = async (req, res) => {
  try {
    const client = await pool.connect();
    // Витягуємо id, path, qty та price
    const { rows } = await client.query(
      "SELECT id, path, qty, price FROM print_prices ORDER BY path ASC, qty ASC NULLS FIRST",
    );
    client.release();
    return res.status(200).json(rows);
  } catch (error) {
    console.error("Помилка отримання списку цін:", error);
    return res.status(500).json({ error: "Помилка сервера" });
  }
};

// Масове оновлення змінених цін
// routes/pricing.js
const updatePricing = async (req, res) => {
  const { updates } = req.body;

  if (!updates || !Array.isArray(updates)) {
    return res.status(400).json({ error: "Неправильний формат даних" });
  }

  try {
    const client = await pool.connect();
    await client.query("BEGIN");

    for (const item of updates) {
      await client.query("UPDATE print_prices SET price = $1 WHERE id = $2", [
        item.price,
        item.id,
      ]);
    }
    await client.query("COMMIT");
    client.release();
    return res.status(200).json({ message: "Ціни успішно оновлено!" });
  } catch (error) {
    const client = await pool.connect();
    await client.query("ROLLBACK");
    client.release();
    console.error("Помилка оновлення цін:", error);
    return res.status(500).json({ error: "Не вдалося оновити ціни" });
  }
};

// Додаємо нові функції в експорт
module.exports = { getPricing, getPricingFlat, updatePricing };
