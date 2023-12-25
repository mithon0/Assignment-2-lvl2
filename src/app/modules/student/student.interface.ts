// 1. Create an interface representing a document in MongoDB.
export type Guardian = {
  fatherName: string
  fatherOccupation: string
  fatherContactNo: string
  motherName: string
  motherOccupation: string
  motherContactNo: string
}
export type LocalGaurdian = {
  name: string
  occupation: string
  contactNo: string
}
export type Students = {
  id: string
  name: {
    firstname: string
    middleName: string
    lastName: string
  }
  gender: 'male' | 'Female'
  dateOfBirth: string
  email: string
  contactNo: string
  bloodGroup?: 'A' | 'B' | 'AB' | 'O' | 'A+' | 'B+' | 'AB+' | 'O+'
  presentAddress: string
  permanentAddress: string
  guardian: Guardian
  localGaurdian: LocalGaurdian
  profileImg: string
  isActive: 'active' | 'blocked'
}
