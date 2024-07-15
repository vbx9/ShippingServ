import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { ReviewListRelationFilter } from "../review/ReviewListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  name?: StringNullableFilter;
  address?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  orders?: OrderListRelationFilter;
  reviews?: ReviewListRelationFilter;
};
