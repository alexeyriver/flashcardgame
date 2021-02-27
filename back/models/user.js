import mongoose from 'mongoose'


const User = mongoose.model('users', {
  name: String,
  email: String,
  password: String,
  counts: {type: Number, default:0 },
  trueanswer: {type: Number, default:0 },
  falseanswer:{type: Number, default:0 }
  })

export default User;
