/*LIBS*/
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");

/*-------------------------------------------------------------*/

/*CONSTS*/
const app = express();

/*helpers*/
const getOrderNumber = () => {
  return `${("00" + new Date().getUTCDate()).slice(-2)}${(
    "00" + new Date().getUTCMonth()
  ).slice(-2)}-${String(new Date())
    .match(/-?\d/g)
    .map(Number)
    .splice(7, 5)
    .join("")}`;
};

/*nodemailer*/
const transporter = nodemailer.createTransport(
  smtpTransport({
    service: "gmail",
    secure: true,
    auth: {
      user: "copyshop.online@gmail.com",
      pass: "vrwusrojewfthoiq",
    },
  })
);
/*multer*/
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, `${uniqueSuffix}-${file.originalname}`);
  },
});
const upload = multer({ storage });

const PORT = 443;

/*SERVER CONFIG*/
app.set("port", PORT);
app.use("/uploads", express.static("uploads"));
app.use(express.json());
app.use(cors());

/*START SERVER*/
const server = app.listen(app.get("port"), () => {
  const port = server.address().port;
  console.log("\nServer started on port: " + port);
});

/*-----------------------POSTS----------------------------------*/
/*send-email*/
app.post("/send-email", async (req, res) => {
  console.log(req.body);
  const { email, email2, name, message, filePath } = await req.body;
  const number = getOrderNumber();

  console.log(`\nDealing with request...\nEmail: ${email2}\nNumber: ${number}`);

  const mailOptions = {
    from: "copyshop.online@gmail.com", // sender address
    to: "muzychukserhii@gmail.com", // list of receivers
    subject: `Заявка з сайту №${number}`, // Subject line
    html: `
          <div style="padding: 24px; width: calc(100% - 48px);">
            <div style="border: 1px solid #212121; padding: 24px;"><strong>Номер заявки: ${number}</strong> </div>
            <div style="border: 1px solid #212121; padding: 24px;">
              <div><strong>Ім'я: </strong>${name}</div>
              <div><strong>Email: </strong><a href="mailto:${email2}">${email2}</a></div>
            </div>
            <div style="border: 1px solid #212121; padding: 24px;"><strong>Повідомлення: </strong>${message}</div>
            <div style="border: 1px solid #212121; padding: 24px;"><strong>Файл: </strong><a href=${filePath}>${
      filePath || "Файл выдсутній"
    }</a></div>
          </div>
            `,
  };

  try {
    transporter.sendMail(mailOptions, () => {
      console.log(`\nMessage sent. Number: ${number}`);
      return res.json({ message: "OK", number });
    });
  } catch (error) {
    console.log("ERROR:");
    console.error(error);
    return res.status(500).json({ message: "500" });
  }
});

/*call-me*/
app.post("/call-me", async (req, res) => {
  const { name, phone } = await req.body;
  const number = getOrderNumber();
  console.log(
    `\nDealing with request...\nPhone number: ${phone}\nNumber: ${number}`
  );

  const mailOptions = {
    from: "copyshop.online@gmail.com", // sender address
    to: "muzychukserhii@gmail.com", // list of receivers
    subject: `Заявка з сайту №${number}`, // Subject line
    html: `
          <div style="padding: 24px; width: calc(100% - 48px);">
            <div style="border: 1px solid #212121; padding: 24px;"><strong>Номер заявки: ${number}</strong> </div>
            <div style="border: 1px solid #212121; padding: 24px;">
              <div><strong>Ім'я: </strong>${name}</div>
              <div><strong>Телефон: </strong><a href="tel:${phone}">${phone}</a></div>
            </div>
            <div style="border: 1px solid #212121; padding: 24px;"><strong>Повідомлення: </strong>Передзвоніть мені, будь ласка, на мій номер <a href="tel:${phone}">${phone}</a></div>
          </div>
            `,
  };

  try {
    transporter.sendMail(mailOptions, () => {
      console.log(`\nMessage sent. Number: ${number}`);
      return res.json({ message: "OK", number });
    });
  } catch (error) {
    console.log("ERROR:");
    console.error(error);
    return res.status(500).json({ message: "500" });
  }
});

/*upload*/
app.post("/upload", upload.single("file"), (req, res) => {
  return res.json({ message: "OK", filename: req.file.filename });
});
