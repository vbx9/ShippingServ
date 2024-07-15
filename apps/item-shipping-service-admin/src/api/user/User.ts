import { JsonValue } from "type-fest";
import { Order } from "../order/Order";
import { Review } from "../review/Review";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  name: string | null;
  address: string | null;
  phoneNumber: string | null;
  orders?: Array<Order>;
  reviews?: Array<Review>;
};
