const configs = require("../configs");

const setMailOptions = (route, data, number) => {
  return {
    from: configs.transporter.from,
    to: configs.transporter.to,
    subject: configs.transporter.setSubject(route, number),
    html: configs.transporter.setHtml(route, data, number),
  };
};

module.exports = setMailOptions;
