const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const MONGO_DB = process.env.MONGO_DB;

const connect = async () => {
  try {
    const db = await mongoose.connect(MONGO_DB, {
      useNewUrlParser: "true",
    });
    const { name, host } = db.connection;
    console.log(
      `Conectado a la base de datos: ${name} en el servidor: ${host}`
    );
  } catch (err) {
    console.log("No se ha podido conectar a la base de datos", err);
  }
};

module.exports = { connect };
