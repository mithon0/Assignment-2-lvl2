import express, { Application, Request, Response } from 'express'
import cors from 'cors'

const app: Application = express()

// perser
app.use(express.json())
app.use(cors())

// console.log(process.cwd())
app.use('/api/v1/student')

const getAController = (req: Request, res: Response) => {
  const a = 'server running'
  res.send(a)
}
app.get('/', getAController)

export default app
