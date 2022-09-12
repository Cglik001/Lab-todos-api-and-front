import mongoose from 'mongoose'

const {Schema, model} = mongoose

const userSchema = new Schema({
  name : {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "Invalid Email Address"]
  },
  passwordHash : {
    type: String,
    required: true
  },
  todos: [mongoose.ObjectId]
}, {timestamps: true})

const User = model('User', userSchema)

export default User
