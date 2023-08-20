import { UserCreateNestedManyWithoutMorsInput } from "./UserCreateNestedManyWithoutMorsInput";

export type MorCreateInput = {
  users?: UserCreateNestedManyWithoutMorsInput;
  name?: string | null;
  test?: string | null;
};
