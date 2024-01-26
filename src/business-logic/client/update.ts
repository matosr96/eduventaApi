import { RowDataPacket } from "mysql2";
import { pool } from "../../data-sources";
import { UpdateClientDto } from "../../entities";

export const updateClient = async (
  data: UpdateClientDto
): Promise<UpdateClientDto | Error> => {
  const { clientId, name, phone } = data;

  const [existingClient] = await pool.query<RowDataPacket[]>(
    "SELECT * FROM clients WHERE clientId = ?",
    [clientId]
  );

  if (!existingClient.length) {
    throw new Error("Client not found");
  }

  const [updateResult]: any = await pool.query(
    "UPDATE clients SET name = ?, phone = ? WHERE clientId = ?",
    [name, phone, clientId]
  );

  if (updateResult.affectedRows !== 1) {
    throw new Error("Failed to update client");
  }

  return { clientId, name, phone };
};
