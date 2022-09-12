const loginValidationMiddleware = (req, res, next) => {
    const {email, password } = req.body
    if (!email | !password){
      return res.status(422).json({error: "Email and password are required"})
    }
    next()
}

export default loginValidationMiddleware
