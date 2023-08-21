import { Mor } from "../mor/Mor";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  mor?: Mor | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
