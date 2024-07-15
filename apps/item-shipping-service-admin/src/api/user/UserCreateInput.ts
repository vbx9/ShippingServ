import { InputJsonValue } from "../../types";
import { OrderCreateNestedManyWithoutUsersInput } from "./OrderCreateNestedManyWithoutUsersInput";
import { ReviewCreateNestedManyWithoutUsersInput } from "./ReviewCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  name?: string | null;
  address?: string | null;
  phoneNumber?: string | null;
  orders?: OrderCreateNestedManyWithoutUsersInput;
  reviews?: ReviewCreateNestedManyWithoutUsersInput;
};
