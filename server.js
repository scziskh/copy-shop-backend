const express = require("express");

const app = express();

const PORT = 443;

app.get("/mailer", (req, res) => res.send("MailerPage"));

app.listen(PORT, () => console.log("server started"));
