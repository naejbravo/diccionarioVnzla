//This file is for initial data in db

const mongoose = require("mongoose");
const Word = require("../../api/word/models/Word");

const mongoDb =
  "mongodb+srv://root:root@cluster0.ai2wb.mongodb.net/test?retryWrites=true&w=majority";

const word = [
  new Word({
    word: "tacaño",
    venezuelanWord: "Agarra'o",
  }),
  new Word({
    word: "atontado",
    venezuelanWord: "Aguevoneado",
  }),
  new Word({
    word: "aguinaldo",
    venezuelanWord: "obsequio",
  }),
  new Word({
    word: "afecto",
    venezuelanWord: "Amapuche",
  }),
  new Word({
    word: "antiguo",
    venezuelanWord: "Año de la pera",
  }),
  new Word({
    word: "inerte",
    venezuelanWord: "Antiparabolico",
  }),
  new Word({
    word: "malhumorado",
    venezuelanWord: "Arrecho",
  }),
  new Word({
    word: "comida rapida",
    venezuelanWord: "bala fria",
  }),
  new Word({
    word: "ridiculo",
    venezuelanWord: "Balurdo",
  }),
  new Word({
    word: "aglomeracion",
    venezuelanWord: "Bululu",
  }),
  new Word({
    word: "mucho",
    venezuelanWord: "burda",
  }),
  new Word({
    word: "mucho",
    venezuelanWord: "burda",
  }),
  new Word({
    word: "lesbiana",
    venezuelanWord: "cachapera",
  }),
  new Word({
    word: "infidelidad",
    venezuelanWord: "cacho",
  }),
  new Word({
    word: "egoista",
    venezuelanWord: "caleta",
  }),
  new Word({
    word: "peligroso",
    venezuelanWord: "candela",
  }),
  new Word({
    word: "cizañero",
    venezuelanWord: "casquillero",
  }),
  new Word({
    word: "trabajo",
    venezuelanWord: "chamba",
  }),
  new Word({
    word: "burlarse",
    venezuelanWord: "chalequear",
  }),
  new Word({
    word: "rubio",
    venezuelanWord: "catire",
  }),
  new Word({
    word: "agradable",
    venezuelanWord: "chevere",
  }),
  new Word({
    word: "sandalias",
    venezuelanWord: "chola",
  }),
  new Word({
    word: "ladron",
    venezuelanWord: "choro",
  }),
  new Word({
    word: "arma blanca",
    venezuelanWord: "chuzo",
  }),
  new Word({
    word: "copular",
    venezuelanWord: "coger",
  }),
  new Word({
    word: "colar",
    venezuelanWord: "colear",
  }),
  new Word({
    word: "mopa",
    venezuelanWord: "coleto",
  }),
  new Word({
    word: "golpe",
    venezuelanWord: "coñazo",
  }),
  new Word({
    word: "alcohol",
    venezuelanWord: "curda",
  }),
  new Word({
    word: "desorden",
    venezuelanWord: "despelote",
  }),
  new Word({
    word: "relacion",
    venezuelanWord: "empatarse",
  }),
  new Word({
    word: "reservar",
    venezuelanWord: "encaletarse",
  }),
  new Word({
    word: "posturista",
    venezuelanWord: "farandulero",
  }),
  new Word({
    word: "delgado",
    venezuelanWord: "firi firi",
  }),
  new Word({
    word: "arma de fuego",
    venezuelanWord: "hierro",
  }),
  new Word({
    word: "abandonado",
    venezuelanWord: "huele pega",
  }),
  new Word({
    word: "adulador",
    venezuelanWord: "jalabola",
  }),
  new Word({
    word: "revisar",
    venezuelanWord: "jorungar",
  }),
  new Word({
    word: "gordo",
    venezuelanWord: "kilu'o",
  }),
  new Word({
    word: "aburrido",
    venezuelanWord: "ladillado",
  }),
  new Word({
    word: "golpe",
    venezuelanWord: "lepe",
  }),
  new Word({
    word: "pobre",
    venezuelanWord: "limpio",
  }),
  new Word({
    word: "amigo",
    venezuelanWord: "llave",
  }),
  new Word({
    word: "entrometerse",
    venezuelanWord: "metiche",
  }),
  new Word({
    word: "marihuana",
    venezuelanWord: "monte",
  }),
  new Word({
    word: "agradable",
    venezuelanWord: "nota",
  }),
  new Word({
    word: "obsequio",
    venezuelanWord: "ñapa",
  }),
  new Word({
    word: "amigo",
    venezuelanWord: "pana",
  }),
  new Word({
    word: "frio",
    venezuelanWord: "pacheco",
  }),
  new Word({
    word: "sandia",
    venezuelanWord: "patilla",
  }),
  new Word({
    word: "borrachera",
    venezuelanWord: "pea",
  }),
  new Word({
    word: "astuto",
    venezuelanWord: "pilas",
  }),
  new Word({
    word: "fiesta",
    venezuelanWord: "rumba",
  }),
  new Word({
    word: "colecta de dinero",
    venezuelanWord: "vaca",
  }),
  new Word({
    word: "bizco",
    venezuelanWord: "virolo",
  }),
  new Word({
    word: "americano",
    venezuelanWord: "yanque",
  }),
  new Word({
    word: "desorden",
    venezuelanWord: "zaperoco",
  }),
];

console.log(mongoDb);

const wordDocuments = word.map((word) => new Word(word));

mongoose
  .connect(mongoDb, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    const allWords = await Word.find();
    if (allWords.length) {
      await Word.collection.drop();
    }
  })
  .catch((err) => console.log(`Error deleting data: ${err}`))
  .then(async () => {
    await Word.insertMany(wordDocuments);
  })
  .catch((err) => console.log(`Error creating data: ${err}`))
  .finally(() => mongoose.disconnect());
