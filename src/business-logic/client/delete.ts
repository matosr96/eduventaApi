import { RowDataPacket } from "mysql2";
import { pool } from "../../data-sources";

export const deleteClient = async (clientId: number): Promise<true | Error> => {
  const [existingClient] = await pool.query<RowDataPacket[]>(
    "SELECT * FROM clients WHERE clientId = ?",
    [clientId]
  );

  if (!existingClient.length) {
    throw new Error("Client not found");
  }

  const [deleteResult]: any = await pool.query(
    "DELETE FROM clients WHERE clientId = ?",
    [clientId]
  );

  if (deleteResult.affectedRows !== 1) {
    throw new Error("Failed to delete client");
  }

  return true;
};
