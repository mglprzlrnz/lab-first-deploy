const express = require("express");
const siteController = express.Router();

siteController.get("/", (req, res, next) => {
  res.render("site/index", { apiKey: "AIzaSyBrX9IUy98OnKdkhsl6c_Ds68FgG2igcpA" });
});

module.exports = siteController;
