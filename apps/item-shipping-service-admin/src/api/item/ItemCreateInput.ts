import { OrderCreateNestedManyWithoutItemsInput } from "./OrderCreateNestedManyWithoutItemsInput";
import { ReviewCreateNestedManyWithoutItemsInput } from "./ReviewCreateNestedManyWithoutItemsInput";

export type ItemCreateInput = {
  name?: string | null;
  description?: string | null;
  price?: number | null;
  dimensions?: string | null;
  weight?: number | null;
  category?: string | null;
  orders?: OrderCreateNestedManyWithoutItemsInput;
  reviews?: ReviewCreateNestedManyWithoutItemsInput;
};
