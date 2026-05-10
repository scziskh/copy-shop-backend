const callMeRoute = require("./call-me");
const orderRoute = require("./order");
const sendMailRoute = require("./send-mail");
const uploadRoute = require("./upload");
const { getPricing, getPricingFlat, updatePricing } = require("./pricing");

module.exports = {
  callMeRoute,
  sendMailRoute,
  orderRoute,
  uploadRoute,
  getPricing,
  getPricingFlat,
  updatePricing,
};
