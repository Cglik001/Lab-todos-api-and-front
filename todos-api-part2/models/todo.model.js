import mongoose from 'mongoose'

const {Schema, model} = mongoose

const todoSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  user: {
    type: mongoose.ObjectId,
    ref: 'User'
  }
}, {timestamps: true})

const Todo = model('Todo', todoSchema)

export default Todo
