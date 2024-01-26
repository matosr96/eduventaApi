import { Request, Response, Router } from "express";
import { deleteClient } from "../../business-logic";

const router = Router();

export const deleteClientRoute = () => {
  router.delete("/clients/:clientId", async (req: Request, res: Response) => {
    const clientId = Number(req.params.clientId);
    try {
      const client = await deleteClient(clientId);
      res.status(200).json({ message: "cliente eliminado", data: client });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  });
  return router;
};
