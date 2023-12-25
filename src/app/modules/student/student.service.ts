import { Students } from './student.interface'
import { studentModel } from './student.model'

const createStudenIntoDb = async (student: Students) => {
  const result = await studentModel.create(student)
  return result
}
const getAllStudentsIntoDB = async () => {
  const result = await studentModel.find()
  return result
}
export const studentServices = {
  createStudenIntoDb,
  getAllStudentsIntoDB,
}
