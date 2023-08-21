import { InputJsonValue } from "../../types";

export type LoginUpdateInput = {
  accessKey?: string | null;
  testKey?: string | null;
  test?: string | null;
  tttt?: string | null;
  username?: string;
  password?: string;
  roles?: InputJsonValue;
};
