export type Address = {
  street: 'string'
  city: 'string'
  country: 'string'
}
export type Fullname = {
  firstName: 'string'
  lastName: 'string'
}

export type users = {
  userId: 'number'
  username: 'string'
  password: 'string'
  fullName: Fullname
  age: 'number'
  email: 'string'
  isActive: 'boolean'
  hobbies: ['string', 'string']
  address: Address
}
