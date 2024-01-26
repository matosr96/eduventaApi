import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import registerRoutes from "../routes";

// Carga las variables de entorno desde un archivo .env
dotenv.config();



const PORT = process.env.PORT;

const server = express();

// Middleware para registrar las solicitudes entrantes
server.use((req: Request, res: Response, next: NextFunction) => {
  console.log(`Solicitud recibida: ${req.method} ${req.url}`);
  next();
});

// Middleware para procesar JSON
server.use(express.json());

// Importa y registra todas las rutas
registerRoutes(server);

// Middleware para manejar errores
server.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).json({ error: "Error interno del servidor" });
});

// Inicia el servidor
server.listen(PORT, () => {
  console.log("Servidor corriendo en el puerto " + PORT);
});
