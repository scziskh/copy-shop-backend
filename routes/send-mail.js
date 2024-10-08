const transporter = require("../lib/transporter");
const { getOrderNumber, setMailOptions } = require("../helpers");

const sendMailRoute = async (req, res) => {
  const number = getOrderNumber();
  const route = "sendMail";
  const data = await req.body;

  console.log(
    `\nDealing with request ${route}\nNumber: ${number}\nData: ${data}`
  );

  try {
    transporter.sendMail(setMailOptions(route, data, number), (err, info) => {
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
