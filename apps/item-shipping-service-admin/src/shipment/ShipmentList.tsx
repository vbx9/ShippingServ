import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ORDER_TITLE_FIELD } from "../order/OrderTitle";

export const ShipmentList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Shipments"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};