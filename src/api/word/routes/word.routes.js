const wordRoutes = require("express").Router();
const { getWord, getWordsByWord } = require("../controllers/word.controller");

wordRoutes.get("/", getWord);
wordRoutes.get("/:word", getWordsByWord);

module.exports = wordRoutes;
