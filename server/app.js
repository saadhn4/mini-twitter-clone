import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 5006;

app.use(express.static(path.join(__dirname, "dist"))); // Keep backend routes below this

app.get("/", (req, res) => {
  try {
    res.status(200).json({ msg: "Hello world!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});

app.get("/saad", (req, res) => {
  try {
    res.status(200).json({ msg: "Hello Saad!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: error });
  }
});

// Wildcard route using a regex to avoid matching malformed full URLs
app.get(/^\/(?!.*https?:\/\/).*$/, (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Running at ${PORT}`);
});
