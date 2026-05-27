require("dotenv").config();

/*LIBS*/
const express = require("express");
const cors = require("cors");
const upload = require("./lib/multer");
const {
  sendMailRoute,
  callMeRoute,
  uploadRoute,
  orderRoute,
  getPricing,
  getPricingFlat,
  updatePricing,
  loginRoute, // <--- ДОДАНО ІМПОРТ
} = require("./routes");

/*-------------------------------------------------------------*/
const app = express();
const PORT = 443;

app.set("port", PORT);
app.use("/uploads", express.static("uploads"));
app.use(express.json());
app.use(cors());

const server = app.listen(app.get("port"), () => {
  const port = server.address().port;
  console.log("\nServer started on port: " + port);
});

/*-----------------------POSTS----------------------------------*/
app.post("/login", async (req, res) => {
  loginRoute(req, res); // <--- ДОДАНО РОУТ
});

app.post("/send-email", async (req, res) => {
  sendMailRoute(req, res);
});
app.post("/call-me", async (req, res) => {
  callMeRoute(req, res);
});
app.post("/order", async (req, res) => {
  orderRoute(req, res);
});
app.post("/upload", upload.single("file"), async (req, res) => {
  uploadRoute(req, res);
});

/*-----------------------GET----------------------------------*/
app.get("/pricing", async (req, res) => {
  getPricing(req, res);
});
app.get("/pricing-flat", async (req, res) => {
  getPricingFlat(req, res);
});
app.get("/", (req, res) => {
  res
    .status(200)
    .json({
      message: "Copy Shop API is working",
      node_version: process.version,
    });
});

/*-----------------------PUT----------------------------------*/
app.put("/pricing", async (req, res) => {
  updatePricing(req, res);
});
