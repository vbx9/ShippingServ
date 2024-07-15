import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  orderDate?: SortOrder;
  orderNumber?: SortOrder;
  status?: SortOrder;
  totalPrice?: SortOrder;
  userId?: SortOrder;
  itemId?: SortOrder;
};
