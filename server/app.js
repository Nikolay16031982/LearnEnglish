const fs = require("fs");
const express = require("express");
const app = express();
const PORT = process.env.PORT || require("config").get("PORT");
app.get("/verbs", (req, res) => {
  const content = fs.readFileSync("./data/extra/extra.json", "utf8");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.json(content);
  res.end();
});
app.listen(PORT, () => console.log(`Server start on port ${PORT}`));
