import { Credit } from "./credit";

export type CreateCreditDto = Omit<Credit, "creditId">;
export type UpdateCreditDto = Partial<Credit>;
