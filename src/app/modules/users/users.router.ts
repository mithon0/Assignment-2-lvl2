import express from 'express'
import { userontroller } from './users.controller'
const router = express.Router()

router.post('/users', userontroller.createUser)
export const userRouter = router
