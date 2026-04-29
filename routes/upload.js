const cloudinary = require("../lib/cloudinary");

module.exports = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "Файл не завантажено" });
    }

    const uploadStream = cloudinary.uploader.upload_stream(
      { folder: "copy-shop-uploads" }, // папка в Cloudinary
      (error, result) => {
        if (error) {
          console.error("Cloudinary Error:", error);
          return res
            .status(500)
            .json({ error: "Помилка завантаження в хмару" });
        }
        res.status(200).json({ url: result.secure_url });
      },
    );

    uploadStream.end(req.file.buffer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
