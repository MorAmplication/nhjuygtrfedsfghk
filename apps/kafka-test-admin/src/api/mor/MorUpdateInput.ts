import { UserUpdateManyWithoutMorsInput } from "./UserUpdateManyWithoutMorsInput";

export type MorUpdateInput = {
  users?: UserUpdateManyWithoutMorsInput;
  name?: string | null;
  test?: string | null;
};
