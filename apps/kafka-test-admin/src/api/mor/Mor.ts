import { JsonValue } from "type-fest";

export type Mor = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  test: string | null;
  mmmm: string | null;
  username: string;
  roles: JsonValue;
};
