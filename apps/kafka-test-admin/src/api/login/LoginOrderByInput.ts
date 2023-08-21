import { SortOrder } from "../../util/SortOrder";

export type LoginOrderByInput = {
  accessKey?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  testKey?: SortOrder;
  updatedAt?: SortOrder;
};
