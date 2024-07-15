import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { ReviewListRelationFilter } from "../review/ReviewListRelationFilter";

export type ItemWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  description?: StringNullableFilter;
  price?: FloatNullableFilter;
  dimensions?: StringNullableFilter;
  weight?: FloatNullableFilter;
  category?: StringNullableFilter;
  orders?: OrderListRelationFilter;
  reviews?: ReviewListRelationFilter;
};
