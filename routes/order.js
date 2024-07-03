const { getOrderNumber, setMailOptions } = require("../helpers");
const transporter = require("../lib/transporter");

const orderRoute = async (req, res) => {
  const number = getOrderNumber();
  const route = "order";
  const data = await req.body;

  console.log(`\nDealing with request...\n\nNumber: ${number}`);

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

module.exports = orderRoute;
