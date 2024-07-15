import { Order } from "../order/Order";

export type Shipment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  shipmentNumber: string | null;
  trackingNumber: string | null;
  shipmentDate: Date | null;
  expectedDeliveryDate: Date | null;
  status: string | null;
  order?: Order | null;
};
