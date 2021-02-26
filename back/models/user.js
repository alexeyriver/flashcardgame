import mongoose from 'mongoose'


const User = mongoose.model('users', {
  name: String,
  email: String,
  password: String,
  counts: Number,
  trueanswer: Number,
  falseanswer: Number
  })

export default User;
