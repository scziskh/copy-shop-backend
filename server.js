require("dotenv").config();

/*LIBS*/
const express = require("express");
const cors = require("cors");
const upload = require("./lib/multer");

/*UPLOADTHING INTEGRATION*/
const { createRouteHandler, createUploadthing } = require("uploadthing/express");

const f = createUploadthing();

// Конфигурация загрузчика UploadThing
const uploadRouter = {
  fileUploader: f({
    blob: { maxFileSize: "64MB", maxFileCount: 10 },
  }).onUploadComplete(async ({ file }) => {
    console.log("Файл успешно загружен в UploadThing:", file.url);
    return { uploadedBy: "user" };
  }),
};

const {
  sendMailRoute,
  callMeRoute,
  uploadRoute,
  orderRoute,
  getPricing,
  getPricingFlat,
  updatePricing,
  loginRoute,
  searchCitiesRoute,
  getWarehousesRoute,
} = require("./routes");

/*-------------------------------------------------------------*/
const app = express();
const PORT = process.env.PORT || 443;

app.set("port", PORT);
app.use("/uploads", express.static("uploads"));
app.use(express.json());
app.use(cors());

// Роут для UploadThing (обрабатывает загрузку файлов до 64 МБ)
app.use(
  "/api/uploadthing",
  createRouteHandler({
    router: uploadRouter,
    config: {
      token: process.env.UPLOADTHING_TOKEN,
    },
  })
);

const server = app.listen(app.get("port"), () => {
  const port = server.address().port;
  console.log("\nServer started on port: " + port);
});

/*-----------------------POSTS----------------------------------*/
app.post("/login", async (req, res) => {
  loginRoute(req, res);
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
  res.status(200).json({
    message: "Copy Shop API is working",
    node_version: process.version,
  });
});

app.post("/np/cities", async (req, res) => {
  searchCitiesRoute(req, res);
});
app.post("/np/warehouses", async (req, res) => {
  getWarehousesRoute(req, res);
});

/*-----------------------PUT----------------------------------*/
app.put("/pricing", async (req, res) => {
  updatePricing(req, res);
});

app.post("/api/ai-chat", async (req, res) => {
  try {
    const { locale = "uk", catalog = "", messages = [] } = req.body;
    const langInstruction =
      locale === "ru"
        ? "Отвечай на русском языке."
        : "Відповідай українською мовою.";

    const systemPrompt = `Ты — консультант полиграфии Copy Shop (Киев, site.copy-shop.ua). ${langInstruction}
Отвечай кратко и по делу. Помогай с выбором продукции, материалов и требованиями к макетам (CMYK, 300 dpi, вылеты 2-3 мм, PDF/TIFF).
Если подходит страница из каталога ниже, дай ссылку в формате [Название](/uk/product/slug/). Не выдумывай URL.

Каталог:
${catalog}`;

    const contents = messages.map((m) => ({
      role: m.role === "model" ? "model" : "user",
      parts: [{ text: String(m.text || "") }],
    }));

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: systemPrompt }] },
          contents,
          generationConfig: { temperature: 0.5, maxOutputTokens: 700 },
        }),
      }
    );

    const data = await response.json();
    const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text || "";
    res.json({ reply });
  } catch (err) {
    res.status(500).json({ error: "Gemini request failed" });
  }
});