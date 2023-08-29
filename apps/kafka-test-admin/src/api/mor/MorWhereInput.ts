import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type MorWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  test?: StringNullableFilter;
  mmmm?: StringNullableFilter;
};
