const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Pool } = require("pg");

// Підключення до БД (переконайтеся, що DATABASE_URL є у .env бекенду)
const pool = new Pool({
  connectionString: process.env.price_DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

const loginRoute = async (req, res) => {
  const { login, password } = req.body;

  if (!login || !password) {
    return res.status(400).json({ error: "Введіть логін та пароль" });
  }

  try {
    const { rows } = await pool.query(
      "SELECT * FROM managers WHERE login = $1",
      [login],
    );
    const user = rows[0];

    if (!user) {
      return res.status(401).json({ error: "Невірний логін або пароль" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password_hash);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Невірний логін або пароль" });
    }

    // Генеруємо токен
    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET || "fallback_secret_key",
      { expiresIn: "24h" },
    );

    res.status(200).json({ token });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ error: "Помилка сервера баз даних" });
  }
};

module.exports = loginRoute;
