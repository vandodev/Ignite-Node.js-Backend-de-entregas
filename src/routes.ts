import { Router } from 'express'

import CreateClientController from './modules/client/useCases/createClient/createClientController'
import AuthenticateClientController from './modules/account/autheticateClient/AuthenticateClientController'
import CreateDeliverymanController from './modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController'
import AuthenticateDeliverymanController from './modules/account/authenticateDeliveryman/AuthenticateDeliverymanController'
import CreateDeliveryController from './modules/delivery/useCases/createDelivery/CreateDeliveryController'
import ensureAuthenticatedClient from './middlewares/ensureAuthenticatedClient'
import FindAvailableDeliveriesController from './modules/delivery/useCases/findAvailableDeliveries/FindAvailableDeliveriesController'
import ensureAuthenticateDeliveryman from './middlewares/ensureAuthenticatedDeliveryman'
import UpdateDeliverymanController from './modules/delivery/useCases/updateDeliveryman/UpdateDeliverymanController'
import FindClientDeliveriesController from './modules/client/useCases/findClientDeliveries/FindClientDeliveriesController'
import FindDeliverymanDeliveriesController from './modules/deliveryman/useCases/findAvailableDeliveries/FindAvailableDeliveriesController'
import FinishDeliveryController from './modules/delivery/useCases/finishDelivery/FinishDeliveryController'

const routes = Router()

const createClientController = new CreateClientController()
const authenticateClientController = new AuthenticateClientController()
const findClientDeliveries = new FindClientDeliveriesController() 

const createDeliverymanController = new CreateDeliverymanController()
const authenticateDeliverymanController = new AuthenticateDeliverymanController()
const findDeliverymanDeliveries = new FindDeliverymanDeliveriesController()
const finishDeliveryController = new FinishDeliveryController()

const createDeliveryController = new CreateDeliveryController()
const findAvailableDeliveriesController = new FindAvailableDeliveriesController()
const updateDeliverymanController = new UpdateDeliverymanController();

routes.post('/client', createClientController.handle)
routes.post('/client/authenticate', authenticateClientController.handle)
routes.get('/client/deliveries', ensureAuthenticatedClient, findClientDeliveries.handle)

routes.post('/deliveryman', createDeliverymanController.handle)
routes.post('/deliveryman/authenticate', authenticateDeliverymanController.handle)
routes.get('/deliveryman/deliveries', ensureAuthenticateDeliveryman, findDeliverymanDeliveries.handle)

routes.post('/delivery', ensureAuthenticatedClient, createDeliveryController.handle)
routes.get('/delivery/available',ensureAuthenticateDeliveryman ,findAvailableDeliveriesController.handle)
routes.put('/delivery/updateDeliveryman/:id', ensureAuthenticateDeliveryman, updateDeliverymanController.handle)
routes.put('/delivery/finish/:id', ensureAuthenticateDeliveryman, finishDeliveryController.handle)//id da entrega aceita


export {routes}