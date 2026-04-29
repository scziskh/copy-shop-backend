const getOrderNumber = () => {
  const now = new Date();

  const day = String(now.getUTCDate()).padStart(2, "0");

  const month = String(now.getUTCMonth() + 1).padStart(2, "0");

  const suffix = String(now.getTime()).slice(-5);

  return `${day}${month}-${suffix}`;
};

module.exports = getOrderNumber;
