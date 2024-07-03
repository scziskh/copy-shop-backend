/*LIBS*/
const express = require("express");
const cors = require("cors");
const upload = require("./lib/multer");
const { sendMailRoute, callMeRoute, uploadRoute } = require("./routes");

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

/*upload*/
app.post("/upload", upload.single("file"), async (req, res) => {
  uploadRoute(req, res);
});
