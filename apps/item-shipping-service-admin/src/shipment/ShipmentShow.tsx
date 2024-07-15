import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { ORDER_TITLE_FIELD } from "../order/OrderTitle";

export const ShipmentShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="shipmentNumber" source="shipmentNumber" />
        <TextField label="trackingNumber" source="trackingNumber" />
        <TextField label="shipmentDate" source="shipmentDate" />
        <TextField label="expectedDeliveryDate" source="expectedDeliveryDate" />
        <TextField label="status" source="status" />
        <ReferenceField label="Order" source="order.id" reference="Order">
          <TextField source={ORDER_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
