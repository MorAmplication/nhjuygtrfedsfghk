import { UserCreateNestedManyWithoutMorsInput } from "./UserCreateNestedManyWithoutMorsInput";

export type MorCreateInput = {
  name?: string | null;
  test?: string | null;
  users?: UserCreateNestedManyWithoutMorsInput;
};
