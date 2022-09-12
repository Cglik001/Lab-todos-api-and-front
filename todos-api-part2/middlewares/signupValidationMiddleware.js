const signupValidationMiddleware = (req, res, next) => {
    const {name, email, password } = req.body
    if (!name | !email | !password){
      return res.status(422).json({error: "Email and password are required"})
    }
    next()
}

export default signupValidationMiddleware
