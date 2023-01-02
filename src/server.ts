import express, { NextFunction, Request, Response } from 'express'
import { routes } from './routes'

const app = express()
app.use(express.json())
app.use(routes)


app.listen(3000, () => console.log('Server running on 3000'))