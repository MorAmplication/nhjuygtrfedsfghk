import { UserUpdateManyWithoutMorsInput } from "./UserUpdateManyWithoutMorsInput";

export type MorUpdateInput = {
  name?: string | null;
  test?: string | null;
  users?: UserUpdateManyWithoutMorsInput;
};
