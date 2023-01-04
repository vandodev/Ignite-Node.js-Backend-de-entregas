import { request, Request, Response } from 'express'
import CreateDeliveryUseCase from './CreateDeliveryUseCase'

export default class CreateDeliveryController {
  async handle(req: Request, res: Response) {
    const { item_name } = req.body
     const {id_client} =  request

    const createDeliveryUseCase = new CreateDeliveryUseCase()

    const delivery = await createDeliveryUseCase.execute({
      id_client,
      item_name
    })

    return res.json(delivery)
  }
}