import { Order } from "../order/Order";
import { Review } from "../review/Review";

export type Item = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  price: number | null;
  dimensions: string | null;
  weight: number | null;
  category: string | null;
  orders?: Array<Order>;
  reviews?: Array<Review>;
};
