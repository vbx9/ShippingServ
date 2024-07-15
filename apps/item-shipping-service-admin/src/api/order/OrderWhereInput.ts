import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";
import { ShipmentListRelationFilter } from "../shipment/ShipmentListRelationFilter";

export type OrderWhereInput = {
  id?: StringFilter;
  orderDate?: DateTimeNullableFilter;
  orderNumber?: StringNullableFilter;
  status?: StringNullableFilter;
  totalPrice?: FloatNullableFilter;
  user?: UserWhereUniqueInput;
  item?: ItemWhereUniqueInput;
  shipments?: ShipmentListRelationFilter;
};
