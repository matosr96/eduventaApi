import { RowDataPacket } from "mysql2";
import { pool } from "../../data-sources";

export const deleteCredit = async (creditId: number): Promise<true | Error> => {
  const [existingCredit] = await pool.query<RowDataPacket[]>(
    "SELECT * FROM Credits WHERE creditId = ?",
    [creditId]
  );

  if (!existingCredit.length) {
    throw new Error("Credit not found");
  }

  const [deleteResult]: any = await pool.query(
    "DELETE FROM Credits WHERE creditId = ?",
    [creditId]
  );

  if (deleteResult.affectedRows !== 1) {
    throw new Error("Failed to delete credit");
  }

  return true;
};
