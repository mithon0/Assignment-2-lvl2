import { usersModel } from '../users/users.model'
import { users } from './users.interface'

const createUsersIntoDb = async (student: users) => {
  const result = await usersModel.create(student)
  return result
}
const getAllUsersIntoDB = async () => {
  const result = await usersModel.find()
  return result
}
export const studentServices = {
  createUsersIntoDb,
  getAllUsersIntoDB,
}
