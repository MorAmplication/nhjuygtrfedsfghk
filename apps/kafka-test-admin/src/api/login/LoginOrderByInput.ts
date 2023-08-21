import { SortOrder } from "../../util/SortOrder";

export type LoginOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  accessKey?: SortOrder;
  testKey?: SortOrder;
  test?: SortOrder;
  username?: SortOrder;
  password?: SortOrder;
  roles?: SortOrder;
};
