const { getOrderNumber, setMailOptions } = require("../helpers");
const transporter = require("../lib/transporter");

const callMe = async (req, res) => {
  const number = getOrderNumber();
  const route = "callMe";
  const data = req.body;

  console.log(`[Request: ${route}] | Number: ${number} | Data:`, data);

  try {
    const info = await transporter.sendMail(
      setMailOptions(route, data, number),
    );

    console.log(`[Success: ${route}] Email sent:`, info.messageId);

    return res.status(200).json({
      message: "OK",
      number,
    });
  } catch (error) {
    console.error(`[Error: ${route}] Detail:`, error);

    return res.status(500).json({
      message: "Internal Server Error",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
};

module.exports = callMe;
