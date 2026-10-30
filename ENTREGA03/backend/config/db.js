const mongoose = require("mongoose");

async function connectDB() {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    console.error("Falta la variable de entorno MONGODB_URI.");
    process.exit(1);
  }

  try {
    await mongoose.connect(uri);
    console.log("MongoDB conectado");
  } catch (error) {
    console.error("No se pudo conectar a MongoDB:", error.message);
    process.exit(1);
  }
}

module.exports = connectDB;
