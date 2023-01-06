import prisma from "../../../../database/prismaClient";

export default class FindClientDeliveriesUseCase {
  async execute(id_client: string) {
    const deliveries = await prisma.client.findMany({
      where: {
        id: id_client
      },
      include:{
        Delivery:true
      }
    })

    return deliveries
  }
}