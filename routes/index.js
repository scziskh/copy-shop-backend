const callMeRoute = require("./call-me");
const orderRoute = require("./order");
const sendMailRoute = require("./send-mail");
const uploadRoute = require("./upload");
const getPricing = require("./pricing");

module.exports = {
  callMeRoute,
  sendMailRoute,
  orderRoute,
  uploadRoute,
  getPricing,
};
