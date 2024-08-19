import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type SupplierWhereInput = {
  contactInfo?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
