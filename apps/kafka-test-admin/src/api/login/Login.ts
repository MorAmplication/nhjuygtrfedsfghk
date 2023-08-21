import { JsonValue } from "type-fest";

export type Login = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  accessKey: string | null;
  testKey: string | null;
  test: string | null;
  tttt: string | null;
  username: string;
  roles: JsonValue;
};
