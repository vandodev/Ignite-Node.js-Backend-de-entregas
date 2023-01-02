import prisma from '../../../database/prismaClient'

interface ICreateClient {
  username: string
  password: string
}

export default class CreateClientUseCase {
  async execute({ username, password }: ICreateClient) {
    const clientExists = await prisma.client.findFirst({
      where: {
        username: {
          equals: username,
          mode: 'insensitive'
        }
      }
    })

    if (clientExists) {
      throw new Error('Client Already Exists')
    }
   
  }
}