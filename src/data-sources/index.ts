import { createPool, Pool, PoolOptions } from "mysql2/promise";
import dotenv from "dotenv";

// Carga las variables de entorno desde un archivo .env
dotenv.config();

// Configuración del pool de conexión
const dbConfig: PoolOptions = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME,
};

// Crear el pool de conexión
export const pool: Pool = createPool(dbConfig);

// Función para cerrar la conexión del pool
export const closePool = async (): Promise<void> => {
  try {
    await pool.end();
    console.log("Conexión del pool cerrada correctamente.");
  } catch (error) {
    console.error("Error al cerrar la conexión del pool:", error.message);
  }
};

// Manejo de errores durante la creación del pool
pool
  .getConnection()
  .then((connection) => {
    connection.release();
    console.log("Conexión al pool establecida correctamente.");
  })
  .catch((error) => {
    console.error("Error al establecer la conexión al pool:", error.message);
  });
