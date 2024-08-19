import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";

export type InventoryUpdateInput = {
  location?: string | null;
  product?: ProductWhereUniqueInput | null;
  quantity?: number | null;
};
