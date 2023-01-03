import { Router } from 'express'

import CreateClientController from './modules/client/useCases/createClientController'
import AuthenticateClientController from './modules/account/autheticateClient/AuthenticateClientController'
import CreateDeliverymanController from './modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController'

const routes = Router()

const createClientController = new CreateClientController()
const authenticateClientController = new AuthenticateClientController()
const createDeliverymanController = new CreateDeliverymanController()

routes.post('/client', createClientController.handle)
routes.post('/client/authenticate', authenticateClientController.handle)

routes.post('/deliveryman', createDeliverymanController.handle)

export {routes}