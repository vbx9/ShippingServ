import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type ShipmentCreateInput = {
  shipmentNumber?: string | null;
  trackingNumber?: string | null;
  shipmentDate?: Date | null;
  expectedDeliveryDate?: Date | null;
  status?: string | null;
  order?: OrderWhereUniqueInput | null;
};
