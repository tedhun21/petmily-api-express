const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const listOfPets = [{ id: 1, name: "hoya", sex: "male", neutered: true }];
  res.json(listOfPets);
});

router.get("/:id", (req, res) => {
  console.log(req.params.id);

  res.end("hi");
});

module.exports = router;
