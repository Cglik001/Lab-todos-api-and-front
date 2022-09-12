import { Router } from 'express'
import Todo from '../models/todo.model.js'

const todosRouter = Router()

todosRouter.get('/todos', async (req, res) => {
  try {
      const todos = await Todo.find({})
      return res.status(200).json(todos)
  } catch (err) {
    console.log(err)
    return res.status(500).json({error:'Error getting todos'})
  }
})

todosRouter.post('/todos', async (req,res) => {
  try {
    const payload = req.body
    const newTodo = await Todo.create(payload)
    return res.status(201).json(newTodo)
  } catch(err){
    console.log(err)
    return res.status(500).json({error: "Error Adding New Todo"})
  }
})

todosRouter.put('/todos/:id', async (req,res) => {
  try {
    const payload = req.body
    const {id} = req.params

    const updatedTodo = await Todo.findOneAndUpdate({_id: id}, payload, {new: true})
    return res.status(200).json(updatedTodo)
  }
  catch(err) {
    console.log(err)
    return res.status(500).json({error: "Error updating todo"})

  }
})

todosRouter.delete('/todos/:id', async (req, res) => {
  try {
    const {id} = req.params
    await Todo.findOneAndDelete({_id: id})
    return res.status(204).json()

  } catch (err) {
    console.log(err)
    return res.status(500).json({error: "Error Deleting Todo"})
  }

})


export default todosRouter
