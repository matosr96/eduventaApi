import { Request, Response, Router } from "express";
import { UpdateClientDto } from "../../entities";
import { updateClient } from "../../business-logic";

const router = Router();

export const updateClientRoute = () => {
  router.put("/clients", async (req: Request, res: Response) => {
    const { body } = req;
    const data = body as UpdateClientDto;
    try {
      const client = await updateClient(data);
      res.status(200).json({ message: "Empleado actualizado", data: client });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  });
  return router;
};
