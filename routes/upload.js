const uploadRoute = (req, res) => {
  if (!req.file) {
    console.error("[Upload Error]: No file received in the request.");
    return res.status(400).json({
      message: "File not found",
      status: "error",
    });
  }

  console.log(`[Upload Success]: File saved as ${req.file.filename}`);

  return res.status(200).json({
    message: "OK",
    filename: req.file.filename,
  });
};

module.exports = uploadRoute;
