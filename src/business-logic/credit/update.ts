import { RowDataPacket } from "mysql2";
import { pool } from "../../data-sources";
import { UpdateCreditDto } from "../../entities";

export const updateCredit = async (
  data: UpdateCreditDto
): Promise<UpdateCreditDto | Error> => {
  const { creditId, clientId, state, total } = data;

  const [existingCredit] = await pool.query<RowDataPacket[]>(
    "SELECT * FROM credits WHERE creditId = ?",
    [creditId]
  );

  if (!existingCredit.length) {
    throw new Error("Credit not found");
  }

  const [updateResult]: any = await pool.query(
    "UPDATE credits SET clientId = ?, total = ?, state = ? WHERE creditId = ?",
    [clientId, total, state, creditId]
  );

  if (updateResult.affectedRows !== 1) {
    throw new Error("Failed to update credits");
  }

  return { creditId, clientId, state, total };
};
