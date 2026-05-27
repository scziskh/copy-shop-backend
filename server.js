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
} = require("./routes");

/*-------------------------------------------------------------*/

/*CONSTS*/
const app = express();

const PORT = 443;

/*SERVER CONFIG*/
app.set("port", PORT);
app.use("/uploads", express.static("uploads"));
app.use(express.json());
app.use(cors());

/*START SERVER*/
const server = app.listen(app.get("port"), () => {
  const port = server.address().port;
  console.log("\nServer started on port: " + port);
});

/*-----------------------POSTS----------------------------------*/
/*send-email*/
app.post("/send-email", async (req, res) => {
  sendMailRoute(req, res);
});

/*call-me*/
app.post("/call-me", async (req, res) => {
  callMeRoute(req, res);
});

/*order*/
app.post("/order", async (req, res) => {
  orderRoute(req, res);
});

/*upload*/
app.post("/upload", upload.single("file"), async (req, res) => {
  uploadRoute(req, res);
});

/*-----------------------GET----------------------------------*/
/*get full pricing JSON*/
app.get("/pricing", async (req, res) => {
  getPricing(req, res);
});

app.get("/pricing-flat", async (req, res) => {
  getPricingFlat(req, res);
});

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Copy Shop API is working",
    node_version: process.version,
    uptime: process.uptime().toFixed(2) + "s",
  });
});

/*-----------------------PUT----------------------------------*/
// Роут для збереження нових цін
app.put("/pricing", async (req, res) => {
  updatePricing(req, res);
});
