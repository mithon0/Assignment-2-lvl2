import { Request, Response } from 'express'
import { studentServices } from './student.service'

const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body.student
    //   will call service function to send this data
    const result = await studentServices.createStudenIntoDb(student)
    // send response
    res.status(200).json({
      success: true,
      message: 'student is created success',
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

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await studentServices.getAllStudentsIntoDB()
    res.status(200).json({
      success: true,
      message: 'get all student succesfully',
      data: result,
    })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something Went wrong',
      Error: err,
    })
  }
}

export const studentController = {
  createStudent,
  getAllStudents,
}
