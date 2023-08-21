import { Amit as TAmit } from "../api/amit/Amit";

export const AMIT_TITLE_FIELD = "nameFirst";

export const AmitTitle = (record: TAmit): string => {
  return record.nameFirst || String(record.id);
};
