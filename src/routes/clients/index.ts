import { Router } from "express";
import { createClientRoute } from "./create";
import { getAllClientsRoute } from "./list";
import { updateClientRoute } from "./update";
import { deleteClientRoute } from "./delete";

const clientsRoutes = Router();

clientsRoutes.use(createClientRoute());
clientsRoutes.use(getAllClientsRoute());
clientsRoutes.use(updateClientRoute());
clientsRoutes.use(deleteClientRoute());

export default clientsRoutes;
