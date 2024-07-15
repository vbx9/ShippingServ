import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type ShipmentWhereInput = {
  id?: StringFilter;
  shipmentNumber?: StringNullableFilter;
  trackingNumber?: StringNullableFilter;
  shipmentDate?: DateTimeNullableFilter;
  expectedDeliveryDate?: DateTimeNullableFilter;
  status?: StringNullableFilter;
  order?: OrderWhereUniqueInput;
};
