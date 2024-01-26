import { Router } from "express";
import clientsRoutes from "./clients";

const registerRoutes = (router: Router) => {
  router.use(clientsRoutes);
};

export default registerRoutes;
