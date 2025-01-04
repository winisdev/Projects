import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(__dirname));

var isAuthorized = false;

app.use(bodyParser.urlencoded({ extended: true }));

const logger = (req, res, next) => {
  const password = req.body["password"];

  if (password === "iloveyou") {
    isAuthorized = true;
  }
  next();
};

app.use(logger);

app.get("/", (req, res) => {
  res.redirect("/index.html");
});

app.post("/check", (req, res) => {
  if (isAuthorized) {
    res.redirect("/dashboard.html");
  } else {
    res.redirect("/index.html");
  }
});

app.post("/logout", (req, res) => {
  isAuthorized = false;
  res.redirect("/index.html");
});
//new changes added fuck you ka

app.listen(port, () => {
  console.log(`This server started at ${port}`);
});
