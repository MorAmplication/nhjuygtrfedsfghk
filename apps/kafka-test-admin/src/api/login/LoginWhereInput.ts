import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type LoginWhereInput = {
  accessKey?: StringNullableFilter;
  id?: StringFilter;
  testKey?: StringNullableFilter;
};
