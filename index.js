const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const { connect } = require("./src/utils/database/db");
const wordRoutes = require("./src/api/word/routes/word.routes");

const app = express();

connect();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/words/", wordRoutes);

app.use("/", (req, res, next) => {
  return next(
    res.status(200).json({
      message: "Nav the api with the following link!",
      info: "/api/words this endpoint get all words",
      info2:
        "/api/words/:word this endpoint needs a word for example /api/words/delgado and gets the word with venezuelan word",
      link: "/api/words",
    })
  );
});

app.listen(PORT, () => {
  console.log(`app listening to PORT: ${PORT}`);
});
