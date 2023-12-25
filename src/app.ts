import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import { userRouter } from './app/modules/users/users.router'

const app: Application = express()

// perser
app.use(express.json())
app.use(cors())

// console.log(process.cwd())
app.use('/api', userRouter)

const getAController = (req: Request, res: Response) => {
  const a = 'server running'
  res.send(a)
}
app.get('/', getAController)

export default app
