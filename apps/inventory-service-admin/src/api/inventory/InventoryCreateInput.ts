import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type InventoryCreateInput = {
  location?: string | null;
  product?: ProductWhereUniqueInput | null;
  quantity?: number | null;
};
