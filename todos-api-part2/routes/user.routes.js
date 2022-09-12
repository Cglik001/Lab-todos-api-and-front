import {Router} from 'express'
import isAuthenticatedMiddleware from '../middlewares/isAuthenticatedMiddleware.js'
import User from '../models/user.model.js'


const userRouter = Router ()

userRouter.get('/profile', isAuthenticatedMiddleware, async (req,res) => {
  try {
    const profile = await User.findOne(req.user, '-passwordHash')
    return res.status(200).send(profile)
  } catch {error} {
    console.log(err)
    return res.status(500).json({error: "Internal server error"})
  }
})

export default userRouter
