import { Request, Response } from 'express'
import { usersServices } from './users.service'

const createUser = async (req: Request, res: Response) => {
  try {
    const users = req.body.users
    //   will call service function to send this data
    const result = await usersServices.createUsersIntoDb(users)
    // send response
    res.status(200).json({
      success: true,
      message: 'users is created success',
      data: result,
    })
  } catch (err) {
    res.status(500).json({
      success: true,
      message: 'Something went Wrong',
      Error: err,
    })
  }
}

export const userontroller = {
  createUser,
}
