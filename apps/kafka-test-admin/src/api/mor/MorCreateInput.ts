import { InputJsonValue } from "../../types";

export type MorCreateInput = {
  name?: string | null;
  test?: string | null;
  mmmm?: string | null;
  ffff?: string | null;
  username: string;
  password: string;
  roles: InputJsonValue;
};
