import { ResultSetHeader } from "mysql2";
import { pool } from "../../data-sources";
import { Credit, CreateCreditDto } from "../../entities";

export const createCredit = async (
  data: CreateCreditDto
): Promise<Credit | Error> => {
  const { clientId, total, state } = data;
  const [rows] = await pool.query<ResultSetHeader>(
    "INSERT INTO credits (clientId, total, state, date) VALUES (?,?,?,CURRENT_TIMESTAMP)",
    [clientId, total, state]
  );

  if (rows.affectedRows !== 1) {
    throw new Error("No se pudo insertar el crédito correctamente.");
  }

  return {
    creditId: rows.insertId,
    clientId,
    total,
    state,
    date: new Date(),
  };
};
