import { RowDataPacket } from "mysql2";
import { pool } from "../../data-sources";
import { Credit } from "../../entities";

export const getAllCredits = async (): Promise<Credit[] | Error> => {
  const [rows] = await pool.query<RowDataPacket[]>("SELECT * FROM Credits");

  const credits: Credit[] = rows.map((row: RowDataPacket) => ({
    creditId: row.creditId,
    clientId: row.clientId,
    total: row.total,
    date: row.date,
    state: row.state,
  }));

  return credits;
};
