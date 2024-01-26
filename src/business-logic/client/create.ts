import { ResultSetHeader } from "mysql2";
import { pool } from "../../data-sources";
import { Client, CreateClientDto } from "../../entities";

export const createClient = async (data: CreateClientDto): Promise<Client | Error> => {
  try {
    const { name, phone } = data;
    const [rows] = await pool.query<ResultSetHeader>(
      "INSERT INTO clients (name, phone) VALUES (?,?)",
      [name, phone]
    );
    return { clientId: rows.insertId, name, phone };
  } catch (error) {
    console.error("Error al crear el cliente:", error.message);
    return new Error("Error al crear el cliente.");
  }
};
