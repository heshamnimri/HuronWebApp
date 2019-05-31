const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send({ response: "I am alive <===3" }).status(200);
});

router.get("/home", (req, res) => {
  res.send({ response: "mos zoubi" }).status(200);
});

module.exports = router;