const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("sobre", { titulo: "Sobre Nós" });
});

module.exports = router;
