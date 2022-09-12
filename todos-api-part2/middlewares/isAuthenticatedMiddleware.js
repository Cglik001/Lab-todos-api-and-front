import dotenv from 'dotenv/config'
import jwt from 'jsonwebtoken'

const getTokenFromHeaders = req => {
  if(req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer'){
    return req.headers.authorization.split(' ')[1]
  }

  return null
}

const isAuthenticatedMiddleware = (req, res, next) => {
  const token = getTokenFromHeaders(req)
  if(!token) {
    return res.status(401).json({message: 'Token is required.'})
  }

  try {
     const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
     req.user = decodedToken

     next()

  } catch(err) {
    console.log(err)
    return res.status(401).json({message: 'Unauthorized.'})
  }



}

export default isAuthenticatedMiddleware
