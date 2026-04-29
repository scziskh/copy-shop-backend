const express = require("express");
const cors = require("cors");
const path = require("path");

const upload = require("./lib/multer");
const {
  sendMailRoute,
  callMeRoute,
  uploadRoute,
  orderRoute,
} = require("./routes");

const app = express();
const PORT = process.env.PORT || 3000;

app.set("port", PORT);

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use("/uploads/?", express.static(path.join(__dirname, "uploads")));
app.use(cors());

app.post(
  "/upload",
  (req, res, next) => {
    upload.single("file")(req, res, (err) => {
      if (err) {
        console.error("Multer Error:", err.message);
        return res.status(400).json({ error: err.message });
      }
      next();
    });
  },
  async (req, res) => {
    uploadRoute(req, res);
  },
);

app.post("/send-email/?", sendMailRoute);
app.post("/call-me/?", callMeRoute);
app.post("/order/?", orderRoute);

app.get("/ping/?", (req, res) => {
  res.status(200).send("pong");
});
app.get("/status/?", (req, res) => {
  res.status(200).json({
    status: "ok",
    message: "Server is running",
    uptime: process.uptime().toFixed(2) + " seconds",
    timestamp: new Date().toISOString(),
  });
});
app.get("*", (req, res) => {
  res.json({
    message: "Ви потрапили на сервер, але роут не знайдено",
    requestedUrl: req.url,
    originalUrl: req.originalUrl,
  });
});

const server = app.listen(app.get("port"), () => {
  console.log("\nServer started on port: " + PORT);
});

server.timeout = 300000;
