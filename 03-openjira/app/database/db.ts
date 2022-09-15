import mongoose from "mongoose";

/**
 * 0: desconectado
 * 1: conectado
 * 3: conectando...
 * 4: descontando...
 */
const mongoConnection = {
  isConnected: 0,
};

const db = {
  connect: async () => {
    if (mongoConnection.isConnected) {
      // console.log("Conectado");
      return;
    }

    if (mongoose.connections.length > 0) {
      mongoConnection.isConnected = mongoose.connections[0].readyState;

      if (mongoConnection.isConnected === 1) {
        // console.log("usando conexion anterior");
        return;
      }

      await mongoose.disconnect();
    }

    await mongoose.connect(
      process.env.MONGO_URI || "mongo://localhost:27017/tododb"
    );
    mongoConnection.isConnected = 1;
    // console.log("Conectado a mongo", process.env.MONGO_URI);
  },
  disconnect: async () => {
    if (process.env.NODE_ENV === "development") return;
    if (mongoConnection.isConnected === 0) return;
    await mongoose.disconnect();
    // console.log("Desconectado");
  },
};

export default db;
