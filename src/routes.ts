import { Router } from 'express'

import CreateClientController from './modules/client/useCases/createClientController'
import AuthenticateClientController from './modules/account/autheticateClient/AuthenticateClientController'

const routes = Router()

const createClientController = new CreateClientController()
const authenticateClientController = new AuthenticateClientController()

routes.post('/client', createClientController.handle)
routes.post('/client/authenticate', authenticateClientController.handle)

export {routes}