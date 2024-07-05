const { MailtrapTransport } = require("mailtrap");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport(
  MailtrapTransport({
    host: "send.api.mailtrap.io",
    token: "efd21d9451916a7bc3b81154e079ccc6",
  })
);

module.exports = transporter;
