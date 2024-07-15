import { InputJsonValue } from "../../types";
import { OrderUpdateManyWithoutUsersInput } from "./OrderUpdateManyWithoutUsersInput";
import { ReviewUpdateManyWithoutUsersInput } from "./ReviewUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  name?: string | null;
  address?: string | null;
  phoneNumber?: string | null;
  orders?: OrderUpdateManyWithoutUsersInput;
  reviews?: ReviewUpdateManyWithoutUsersInput;
};
