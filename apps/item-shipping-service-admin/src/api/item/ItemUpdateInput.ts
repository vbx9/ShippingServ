import { OrderUpdateManyWithoutItemsInput } from "./OrderUpdateManyWithoutItemsInput";
import { ReviewUpdateManyWithoutItemsInput } from "./ReviewUpdateManyWithoutItemsInput";

export type ItemUpdateInput = {
  name?: string | null;
  description?: string | null;
  price?: number | null;
  dimensions?: string | null;
  weight?: number | null;
  category?: string | null;
  orders?: OrderUpdateManyWithoutItemsInput;
  reviews?: ReviewUpdateManyWithoutItemsInput;
};
