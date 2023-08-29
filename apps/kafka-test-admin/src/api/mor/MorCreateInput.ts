import { InputJsonValue } from "../../types";

export type MorCreateInput = {
  name?: string | null;
  test?: string | null;
  username: string;
  password: string;
  roles: InputJsonValue;
};
