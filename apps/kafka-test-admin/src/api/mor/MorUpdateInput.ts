import { InputJsonValue } from "../../types";

export type MorUpdateInput = {
  name?: string | null;
  test?: string | null;
  username?: string;
  password?: string;
  roles?: InputJsonValue;
};
