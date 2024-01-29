import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import registerRoutes from "../routes";

//swagger
import swaggerUI from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import path from "path";

const swaggerSpec = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Eduventa API",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:8000",
      },
    ],
  },
  apis: [
    path.join(__dirname, "../docs/swagger/*.json")
  ],
};

// Carga las variables de entorno desde un archivo .env
dotenv.config();

const PORT = process.env.PORT || 8000;

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

// Configuración de Swagger
const specs = swaggerJsDoc(swaggerSpec);
server.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

// Middleware para manejar errores
server.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.status(500).json({ error: "Error interno del servidor" });
});

// Inicia el servidor
server.listen(PORT, () => {
  console.log("Servidor corriendo en el puerto " + PORT);
});
