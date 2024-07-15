import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";
import { ShipmentCreateNestedManyWithoutOrdersInput } from "./ShipmentCreateNestedManyWithoutOrdersInput";

export type OrderCreateInput = {
  orderDate?: Date | null;
  orderNumber?: string | null;
  status?: string | null;
  totalPrice?: number | null;
  user?: UserWhereUniqueInput | null;
  item?: ItemWhereUniqueInput | null;
  shipments?: ShipmentCreateNestedManyWithoutOrdersInput;
};
