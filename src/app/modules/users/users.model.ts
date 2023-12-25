import mongoose, { Schema, model } from 'mongoose'
import { users } from './users.interface'

const addressSchema = new mongoose.Schema({
  street: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
})

const fullnameSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
})

const userSchema = new Schema<users>({
  userId: { type: String },
  username: { type: String, required: true },
  password: { type: String, required: true },
  fullName: { type: fullnameSchema, required: true },
  age: { type: String, required: true },
  email: { type: String, required: true },
  isActive: { type: String },
  hobbies: { type: [String], required: true },
  address: { type: addressSchema, required: true },
})

export const usersModel = model<users>('user', userSchema)
