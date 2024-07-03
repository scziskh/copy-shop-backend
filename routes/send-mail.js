const transporter = require("../lib/transporter");
const configs = require("../configs");
const { getOrderNumber } = require("../helpers");

const sendMailRoute = async (req, res) => {
  const number = getOrderNumber();
  const route = "sendMail";
  const data = await req.body;

  console.log(
    `\nDealing with request ${route}\nNumber: ${number}\nData: ${data}`
  );

  const mailOptions = {
    from: configs.transporter.from, // sender address
    to: configs.transporter.to, // list of receivers
    subject: configs.transporter.setSubject(route, number), // Subject line
    html: configs.transporter.setHtml(route, data, number),
  };

  try {
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: "500", err });
      } else {
        console.log(info);
        return res.json({ message: "OK", number });
      }
    });
  } catch (error) {
    console.log("ERROR:");
    console.error(error);
    return res.status(500).json({ message: "500" });
  }
};

module.exports = sendMailRoute;
