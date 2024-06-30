const getOrderNumber = () => {
  return `${("00" + new Date().getUTCDate()).slice(-2)}${(
    "00" + new Date().getUTCMonth()
  ).slice(-2)}-${String(new Date())
    .match(/-?\d/g)
    .map(Number)
    .splice(7, 5)
    .join("")}`;
};

module.exports = getOrderNumber;
