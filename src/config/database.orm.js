const mongoose = require("mongoose")
const logger = require("./logger")
const config = require("../../key")

const connectMongoDB = async () => {
  try {
    await mongoose.connect(config.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "indiec",
    })
    logger.info("Conexión a MongoDB establecida correctamente")
  } catch (error) {
    logger.error("Error al conectar con MongoDB:", error)
    throw error
  }
}

mongoose.connection.on("disconnected", () => {
  logger.warn("MongoDB desconectado")
})

mongoose.connection.on("reconnected", () => {
  logger.info("MongoDB reconectado")
})

module.exports = { connectMongoDB }
