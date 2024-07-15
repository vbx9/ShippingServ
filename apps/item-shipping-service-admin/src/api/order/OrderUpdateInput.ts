import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";
import { ShipmentUpdateManyWithoutOrdersInput } from "./ShipmentUpdateManyWithoutOrdersInput";

export type OrderUpdateInput = {
  orderDate?: Date | null;
  orderNumber?: string | null;
  status?: string | null;
  totalPrice?: number | null;
  user?: UserWhereUniqueInput | null;
  item?: ItemWhereUniqueInput | null;
  shipments?: ShipmentUpdateManyWithoutOrdersInput;
};
