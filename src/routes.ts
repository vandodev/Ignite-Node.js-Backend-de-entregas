import { Router } from 'express'

import CreateClientController from './modules/client/useCases/createClientController'
import AuthenticateClientController from './modules/account/autheticateClient/AuthenticateClientController'
import CreateDeliverymanController from './modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController'
import AuthenticateDeliverymanController from './modules/account/authenticateDeliveryman/AuthenticateDeliverymanController'
import CreateDeliveryController from './modules/delivery/useCases/createDelivery/CreateDeliveryController'
import ensureAuthenticatedClient from './middlewares/ensureAuthenticatedClient'
import FindAvailableDeliveriesController from './modules/delivery/useCases/findAvailableDeliveries/FindAvailableDeliveriesController'


const routes = Router()

const createClientController = new CreateClientController()
const authenticateClientController = new AuthenticateClientController()

const createDeliverymanController = new CreateDeliverymanController()
const authenticateDeliverymanController = new AuthenticateDeliverymanController()

const createDeliveryController = new CreateDeliveryController()
const findAvailableDeliveriesController = new FindAvailableDeliveriesController()

routes.post('/client', createClientController.handle)
routes.post('/client/authenticate', authenticateClientController.handle)

routes.post('/deliveryman', createDeliverymanController.handle)
routes.post('/deliveryman/authenticate', authenticateDeliverymanController.handle)

routes.post('/delivery', ensureAuthenticatedClient, createDeliveryController.handle)
routes.get('/delivery/available', findAvailableDeliveriesController.handle)

export {routes}