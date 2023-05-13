const express = require("express");
const bodyparser = require("body-parser");
const path = require("path");
const PORT = process.env.NODE_ENV || 3000;
const app = new express();
app.use(express.static(path.resolve(__dirname, "./")));

app.get("*", (req, res) => {
  res.send("Server Started");
});
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT} 🚀`);
});
