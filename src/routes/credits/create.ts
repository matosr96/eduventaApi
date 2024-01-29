import { Request, Response, NextFunction, Router } from "express";
import { CreateCreditDto } from "../../entities";
import { createCredit } from "../../business-logic";

const router = Router();

export const createCreditRoute = () => {
  router.post(
    "/credits",
    async (req: Request, res: Response, next: NextFunction) => {
      try {
        const { body } = req;
        const data = body as CreateCreditDto;
        const credit = await createCredit(data);
        res.status(200).json({ message: "Credito creado", data: credit });
      } catch (error) {
        next(error); // Pasa el error al siguiente middleware (manejador de errores)
      }
    }
  );

  // Middleware de manejo de errores
  router.use(
    (error: Error, req: Request, res: Response, next: NextFunction) => {
      console.error("Error en middleware de manejo de errores:", error);

      // Agregar manejo específico para el error de duplicado
      if (error.message && error.message.includes("Duplicate entry")) {
        return res
          .status(400)
          .json({ error: "Ya existe un crédito pendiente para este cliente." });
      }

      res.status(500).json({ error: "Error interno del servidor" });
    }
  );

  return router;
};
