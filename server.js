const express = require("express");
const cors = require("cors");
const upload = require("./lib/multer");
const {
  sendMailRoute,
  callMeRoute,
  uploadRoute,
  orderRoute,
} = require("./routes");

const app = express();
const PORT = 443;

app.set("port", PORT);

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.use("/uploads", express.static("uploads"));
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

app.post("/send-email", sendMailRoute);
app.post("/call-me", callMeRoute);
app.post("/order", orderRoute);

const server = app.listen(app.get("port"), () => {
  console.log("\nServer started on port: " + PORT);
});

server.timeout = 300000;
