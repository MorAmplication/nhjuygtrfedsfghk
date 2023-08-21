import { MorWhereUniqueInput } from "../mor/MorWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  mor?: MorWhereUniqueInput | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
