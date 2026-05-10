const { Pool } = require("pg");

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
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

module.exports = getPricing;
