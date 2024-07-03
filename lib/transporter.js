const { MailtrapTransport } = require("mailtrap");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport(
  MailtrapTransport({
    token: "f027846d0009460d6a52ff4be26f703f",
  })
);

module.exports = transporter;
