import { Router } from "express";
import clientsRoutes from "./clients";
import creditsRoutes from "./credits";

const registerRoutes = (router: Router) => {
  router.use(clientsRoutes);
  router.use(creditsRoutes);
};

export default registerRoutes;
