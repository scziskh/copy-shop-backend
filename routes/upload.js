const uploadRoute = (req, res) => {
  return res.json({ message: "OK", filename: req.file.filename });
};

module.exports = uploadRoute;
