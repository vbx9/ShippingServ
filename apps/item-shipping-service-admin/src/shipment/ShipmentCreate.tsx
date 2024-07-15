import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { OrderTitle } from "../order/OrderTitle";

export const ShipmentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="shipmentNumber" source="shipmentNumber" />
        <TextInput label="trackingNumber" source="trackingNumber" />
        <DateTimeInput label="shipmentDate" source="shipmentDate" />
        <DateTimeInput
          label="expectedDeliveryDate"
          source="expectedDeliveryDate"
        />
        <TextInput label="status" source="status" />
        <ReferenceInput source="order.id" reference="Order" label="Order">
          <SelectInput optionText={OrderTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
