import { Request, Response, Router } from "express";
import { UpdateCreditDto } from "../../entities";
import { updateCredit } from "../../business-logic";

const router = Router();

export const updateCreditRoute = () => {
  router.put("/credits", async (req: Request, res: Response) => {
    const { body } = req;
    const data = body as UpdateCreditDto;
    try {
      const credits = await updateCredit(data);
      res.status(200).json({ message: "Credito actualizado", data: credits });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  });
  return router;
};
