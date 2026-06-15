const callMeRoute = require("./call-me");
const orderRoute = require("./order");
const sendMailRoute = require("./send-mail");
const uploadRoute = require("./upload");
const { getPricing, getPricingFlat, updatePricing } = require("./pricing");
const loginRoute = require("./login");
const { searchCitiesRoute } = require("./get-cities");
const { getWarehousesRoute } = require("./get-warehouse");

module.exports = {
  callMeRoute,
  sendMailRoute,
  orderRoute,
  uploadRoute,
  getPricing,
  getPricingFlat,
  updatePricing,
  loginRoute,
  searchCitiesRoute,
  getWarehousesRoute,
};
