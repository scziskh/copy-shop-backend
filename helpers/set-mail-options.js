const configs = require("../configs");

/**
 * Формує об'єкт налаштувань для відправки листа через Nodemailer
 * @param {string} route
 * @param {object} data
 * @param {string|number} number -
 */
const setMailOptions = (route, data, number) => {
  const { from, to, setSubject, setHtml } = configs.transporter;

  if (!setSubject || !setHtml) {
    throw new Error(
      `[MailOptions Error]: Formatting methods are missing for route ${route}`,
    );
  }

  return {
    from,
    to,
    subject: setSubject(route, number),
    html: setHtml(route, data, number),
  };
};

module.exports = setMailOptions;
