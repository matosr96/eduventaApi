import { Request, Response, Router } from "express";
import { getAllClients } from "../../business-logic";

const router = Router();

export const getAllClientsRoute = () => {
  router.get("/clients", async (req: Request, res: Response) => {
    try {
      const clients = await getAllClients();
      res
        .status(200)
        .json({ message: "Clientes obtenidos con exito", data: clients });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  });
  return router;
};
