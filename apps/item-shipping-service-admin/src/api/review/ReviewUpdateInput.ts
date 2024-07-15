import { ItemWhereUniqueInput } from "../item/ItemWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ReviewUpdateInput = {
  rating?: number | null;
  comment?: string | null;
  item?: ItemWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
