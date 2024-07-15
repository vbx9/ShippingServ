import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { ItemTitle } from "../item/ItemTitle";
import { ShipmentTitle } from "../shipment/ShipmentTitle";

export const OrderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="orderDate" source="orderDate" />
        <TextInput label="orderNumber" source="orderNumber" />
        <TextInput label="status" source="status" />
        <NumberInput label="totalPrice" source="totalPrice" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput source="item.id" reference="Item" label="Item">
          <SelectInput optionText={ItemTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="shipments"
          reference="Shipment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ShipmentTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
