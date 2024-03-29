import { RowDataPacket } from "mysql2";
import { pool } from "../../data-sources";
import { Client } from "../../entities";

export const getAllClients = async (): Promise<Client[] | Error> => {
  const [rows] = await pool.query<RowDataPacket[]>("SELECT * FROM clients");

  const clients: Client[] = rows.map((row: RowDataPacket) => ({
    clientId: row.clientId,
    name: row.name,
    phone: row.phone,
  }));

  return clients;
};
