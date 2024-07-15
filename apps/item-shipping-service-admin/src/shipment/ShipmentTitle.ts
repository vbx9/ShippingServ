import { Shipment as TShipment } from "../api/shipment/Shipment";

export const SHIPMENT_TITLE_FIELD = "shipmentNumber";

export const ShipmentTitle = (record: TShipment): string => {
  return record.shipmentNumber?.toString() || String(record.id);
};
