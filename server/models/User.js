import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
  name: {
    type: String;
    required: true;
  },
  email: {
    type: Email;
    Unique: true;
    required: true;
  }
}) 

const User = mongoose.model('user', userSchema)

export default  User;