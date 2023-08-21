import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MorWhereUniqueInput } from "../mor/MorWhereUniqueInput";

export type UserWhereInput = {
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  mor?: MorWhereUniqueInput;
  username?: StringFilter;
};
