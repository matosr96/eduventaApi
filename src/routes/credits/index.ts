import { Router } from "express";
import { createCreditRoute } from "./create";
import { getAllCreditsRoute } from "./list";
import { updateCreditRoute } from "./update";
import { deleteCreditRoute } from "./delete";

const creditsRoutes = Router();

creditsRoutes.use(createCreditRoute());
creditsRoutes.use(getAllCreditsRoute());
creditsRoutes.use(updateCreditRoute());
creditsRoutes.use(deleteCreditRoute());

export default creditsRoutes;
