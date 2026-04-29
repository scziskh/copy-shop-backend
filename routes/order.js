const { getOrderNumber, setMailOptions } = require("../helpers");
const transporter = require("../lib/transporter");

const orderRoute = async (req, res) => {
  const number = getOrderNumber();
  const route = "order";
  const data = req.body;

  console.log(`[Request: ${route}] | Processing Order #${number}`);
  if (data?.cartItems?.length > 0) {
    console.log("First item params:", data.cartItems[0].params);
  } else {
    console.warn("Warning: Received an order with an empty cart.");
  }

  try {
    const info = await transporter.sendMail(
      setMailOptions(route, data, number),
    );

    console.log(
      `[Success: ${route}] Email sent for Order #${number}:`,
      info.messageId,
    );
    return res.status(200).json({
      message: "OK",
      number,
    });
  } catch (error) {
    console.error(
      `[Error: ${route}] Failed to process order #${number}:`,
      error,
    );
    return res.status(500).json({
      message: "500",
      details: "Помилка при відправці замовлення",
    });
  }
};

module.exports = orderRoute;
