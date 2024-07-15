import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { OrderTitle } from "../order/OrderTitle";

export const ShipmentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
