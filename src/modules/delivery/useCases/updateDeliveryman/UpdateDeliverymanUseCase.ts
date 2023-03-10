import prisma from "../../../../database/prismaClient"

interface IUpdateDeliveryman {
  id_delivery: string
  id_deliveryman: string
}

export default class UpdateDeliverymanUseCase {
  async execute({ id_delivery, id_deliveryman }: IUpdateDeliveryman) {
    const result = await prisma.delivery.update({
      where: {
        id: id_delivery
      },
      data: {
        id_deliveryman
      }
    })

    return result
  }
}