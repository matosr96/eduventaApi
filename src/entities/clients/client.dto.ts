import { Client } from "./client";

export type CreateClientDto = Omit<Client, "clientId">;
export type UpdateClientDto = Partial<Client>;
