import { Request, Response, Router } from "express";
import { deleteCredit } from "../../business-logic";

const router = Router();

export const deleteCreditRoute = () => {
  router.delete("/credits/:creditId", async (req: Request, res: Response) => {
    const creditId = Number(req.params.creditId);
    try {
      const credit = await deleteCredit(creditId);
      res.status(200).json({ message: "credito eliminado", data: credit });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  });
  return router;
};
