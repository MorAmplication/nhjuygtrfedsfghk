import { User } from "../user/User";

export type Mor = {
  createdAt: Date;
  id: string;
  name: string | null;
  test: string | null;
  updatedAt: Date;
  users?: Array<User>;
};
