import { Router } from "express";
import clientsRoutes from "./clients";
import creditsRoutes from "./credits";

const registerRoutes = (router: Router) => {
  router.use("api/v1", clientsRoutes);
  router.use("api/v1", creditsRoutes);
};

export default registerRoutes;
