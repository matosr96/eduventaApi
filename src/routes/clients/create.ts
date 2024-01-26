import { Request, Response, Router } from "express";
import { CreateClientDto } from "../../entities";
import { createClient } from "../../business-logic";

const router = Router();

export const createClientRoute = () => {
  router.post("/clients", async (req: Request, res: Response) => {
    const { body } = req;
    const data = body as CreateClientDto;
    console.log(data);
    try {
      const client = await createClient(data);
      res.status(200).json({ message: "Cliente creado", data: client });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  });
  return router;
};
