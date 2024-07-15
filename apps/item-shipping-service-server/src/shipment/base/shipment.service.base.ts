/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Shipment as PrismaShipment,
  Order as PrismaOrder,
} from "@prisma/client";

export class ShipmentServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.ShipmentCountArgs, "select">): Promise<number> {
    return this.prisma.shipment.count(args);
  }

  async shipments(
    args: Prisma.ShipmentFindManyArgs
  ): Promise<PrismaShipment[]> {
    return this.prisma.shipment.findMany(args);
  }
  async shipment(
    args: Prisma.ShipmentFindUniqueArgs
  ): Promise<PrismaShipment | null> {
    return this.prisma.shipment.findUnique(args);
  }
  async createShipment(
    args: Prisma.ShipmentCreateArgs
  ): Promise<PrismaShipment> {
    return this.prisma.shipment.create(args);
  }
  async updateShipment(
    args: Prisma.ShipmentUpdateArgs
  ): Promise<PrismaShipment> {
    return this.prisma.shipment.update(args);
  }
  async deleteShipment(
    args: Prisma.ShipmentDeleteArgs
  ): Promise<PrismaShipment> {
    return this.prisma.shipment.delete(args);
  }

  async getOrder(parentId: string): Promise<PrismaOrder | null> {
    return this.prisma.shipment
      .findUnique({
        where: { id: parentId },
      })
      .order();
  }
}
