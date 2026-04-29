const transporter = require("../lib/transporter");
const { getOrderNumber, setMailOptions } = require("../helpers");

const sendMailRoute = async (req, res) => {
  const number = getOrderNumber();
  const route = "sendMail";
  const data = req.body;

  console.log(`[Request: ${route}] | ID: ${number}`);
  console.log("Payload:", data);
  try {
    const info = await transporter.sendMail(
      setMailOptions(route, data, number),
    );

    console.log(`[Success: ${route}] Sent: ${info.messageId}`);
    return res.status(200).json({
      message: "OK",
      number,
    });
  } catch (error) {
    console.error(`[Error: ${route}] Full report:`, error);
    return res.status(500).json({
      message: "500",
      status: "error",
    });
  }
};

module.exports = sendMailRoute;
