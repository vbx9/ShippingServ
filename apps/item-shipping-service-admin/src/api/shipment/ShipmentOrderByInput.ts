import { SortOrder } from "../../util/SortOrder";

export type ShipmentOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  shipmentNumber?: SortOrder;
  trackingNumber?: SortOrder;
  shipmentDate?: SortOrder;
  expectedDeliveryDate?: SortOrder;
  status?: SortOrder;
  orderId?: SortOrder;
};
