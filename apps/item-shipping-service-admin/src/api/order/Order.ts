import { User } from "../user/User";
import { Item } from "../item/Item";
import { Shipment } from "../shipment/Shipment";

export type Order = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  orderDate: Date | null;
  orderNumber: string | null;
  status: string | null;
  totalPrice: number | null;
  user?: User | null;
  item?: Item | null;
  shipments?: Array<Shipment>;
};
