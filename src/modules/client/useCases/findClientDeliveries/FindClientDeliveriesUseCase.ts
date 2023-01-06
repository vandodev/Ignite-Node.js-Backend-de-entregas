import prisma from "../../../../database/prismaClient";

export default class FindClientDeliveriesUseCase {
  async execute(id_client: string) {
    const deliveries = await prisma.client.findMany({
      where: {
        id: id_client
      },
      select:{
        Delivery:true,
        id: true,
        username:true,
      }
    })

    return deliveries
  }
}