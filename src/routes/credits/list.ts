import { Request, Response, Router } from "express";
import { getAllCredits } from "../../business-logic";

const router = Router();

export const getAllCreditsRoute = () => {
  router.get("/credits", async (req: Request, res: Response) => {
    try {
      const credits = await getAllCredits();
      res
        .status(200)
        .json({ message: "Creditos obtenidos con exito", data: credits });
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  });
  return router;
};
