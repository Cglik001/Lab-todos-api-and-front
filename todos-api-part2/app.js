import express from 'express'
import dotenv from 'dotenv'
import connectToDb from './config/db.connection.js'
import cors from 'cors'
import Todo from './models/todo.model.js'
import todosRouter from './routes/todos.routes.js'
import authRouter from './routes/auth.routes.js'
import userRouter from './routes/user.routes.js'

const EXPRESS_PORT = process.env.EXPRESS_PORT || 3001

connectToDb()

const app = express()


app.use(express.json())
app.use(cors())

app.get('/', (req, res, next) => {
  res.json({ok: true})
})

app.use(authRouter)
app.use(userRouter)
app.use(todosRouter)


app.listen(EXPRESS_PORT, () => console.log(`Server listening on port ${EXPRESS_PORT}`))
