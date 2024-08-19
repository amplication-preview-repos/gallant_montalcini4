import { Product } from "../product/Product";

export type Inventory = {
  createdAt: Date;
  id: string;
  location: string | null;
  product?: Product | null;
  quantity: number | null;
  updatedAt: Date;
};
