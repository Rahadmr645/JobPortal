import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    Unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilePic : {
    type: String,
    default: '',
  }
})

const User = mongoose.model('user', userSchema)

export default User;