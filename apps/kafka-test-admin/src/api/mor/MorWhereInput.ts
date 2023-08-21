import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type MorWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  test?: StringNullableFilter;
  users?: UserListRelationFilter;
};
