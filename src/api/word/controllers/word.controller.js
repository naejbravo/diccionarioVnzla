const Word = require("../models/Word");

const getWord = async (req, res, next) => {
  try {
    const wordDB = await Word.find();
    if (!wordDB) {
      return next(res.status(404).json("Word not found"));
    }
    return res.status(200).json({
      res: "Words found correctly",
      word: wordDB,
    });
  } catch (error) {
    console.log("Unexpected error", error);
  }
};

const getWordsByWord = async (req, res, next) => {
  try {
    const searchField = await req.params.word;
    console.log(searchField);
    const wordDB = await Word.find({
      word: { $regex: ".*" + searchField + ".*" },
    });
    if (!wordDB) {
      return next(res.status(404).json("Word not found"));
    }
    if (Object.keys(wordDB).length === 0) {
      return next(res.status(404).json("Word not found"));
    } else {
      return res.status(200).json({
        res: "Words found correctly",
        word: wordDB,
      });
    }
  } catch (error) {
    console.log("Unexpected error", error);
  }
};

module.exports = { getWord, getWordsByWord };
