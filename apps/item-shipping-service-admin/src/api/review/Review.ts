import { Item } from "../item/Item";
import { User } from "../user/User";

export type Review = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  rating: number | null;
  comment: string | null;
  item?: Item | null;
  user?: User | null;
};
