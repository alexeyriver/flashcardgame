import mongoose from 'mongoose'

export default mongoose.model('trafficRules', {
  question: String,
  answer: String,
  cost: Number
})
