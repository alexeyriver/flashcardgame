import mongoose from 'mongoose'

export default mongoose.model('gameOfThrones', {
  question: String,
  answer: String,
  cost: Number
})
