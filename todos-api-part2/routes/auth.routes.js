import {Router} from 'express'
import bcrypt from 'bcryptjs'
import signupValidationMiddleware from '../middlewares/signupValidationMiddleware.js'
import User from '../models/user.model.js'
import dotenv from 'dotenv/config'
import loginValidationMiddleware from '../middlewares/loginValidationMiddleware copy.js'
import jwt from 'jsonwebtoken'

const authRouter = Router()

authRouter.post('/auth/signup', signupValidationMiddleware, async (req,res) => {
  try {
    const {name, email, password } = req.body
    const userExists = await User.findOne({email})
    if(userExists) {
      throw new Error('User Already exists')
    }

    const salt = bcrypt.genSaltSync(+process.env.SALT_ROUNDS)
    const passwordHash = bcrypt.hashSync(password, salt)

    const newUser = await User.create({
      name,
      email,
      passwordHash
    })

    return res.status(201).json({
      name,
      email
    })

  } catch (err) {
    console.log(err)
    return res.status(500).json({error: "Internal server error"})
  }


  return res.status(200).json({ok: true})
})

authRouter.post('/auth/login', loginValidationMiddleware, async (req,res) => {
  try {
    const { email, password} = req.body
    const user = await User.findOne({email})

    if(!user){
      throw new Error("User not found")
    }

    if(!bcrypt.compareSync(password, user.passwordHash)){
      return res.status(401).json({error: 'Invalid e-mail or password'})
    }

    const expiresIn = process.env.JWT_EXPIRES
    const secret = process.env.JWT_SECRET

    const token = jwt.sign({email: user.email}, secret, { expiresIn})
    return res.status(200).json({logged: true, jwt: token})

  } catch(err) {
    console.log(err)
    return res.status(500).json({error: "Internal Server Error"})
  }
})


export default authRouter
