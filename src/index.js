const express = require("express");
const app = express();
const port = 8080;

const petsRouter = require("./routes/pets");

app.use("/api/pets", petsRouter);

app.listen(port, () => {
  console.log(`Petmily Server app listening on port ${port}`);
});
