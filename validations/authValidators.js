const { body, validationResult } = require('express-validator')
const validator = require('validator');

exports.signupValidation = () => {
    return [
      body('name').trim().isLength({min:1 , max:100}).withMessage("User name must not be empty"),
      body('email').trim().isLength({min:1,max:100}).withMessage("Please provide your email"),
      body('password').trim().isLength({min:8,max:100}).withMessage('Password should contain atleast 8 character'),
    ]
}

exports.validate = (req, res, next) => {
  const errors = validationResult(req)
  if (errors.isEmpty()) {
    return next()
  }
  const extractedErrors = []
  errors.array().map(err => extractedErrors.push(err.msg ))

  return res.status(422).json({
    errors: extractedErrors,
  })
}
