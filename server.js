const express = require("express");
const path = require("path");
const buildPath = path.join(__dirname, "public");
const port = process.env.PORT || 3000 || 8080;
const app = express();
app.use(express.static(buildPath));
app.get("*", (req, res) => {
  res.sendFile(path.join(buildPath, "home.html"));
});
app.listen(port, () => {
  console.log("server is running at port ", port);
});
