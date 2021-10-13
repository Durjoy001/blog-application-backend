const { body, validationResult } = require('express-validator')

exports.createBlogValidation = () => {
  return [
    //body('username').isEmail(),
    body('name').isLength({ min: 5 , max: 100}).withMessage('name must be between 5 to 100 letter'),
    body('description').isLength({ min: 5 , max: 1000}),
  ]
}

exports.validate = (req, res, next) => {
  const errors = validationResult(req)
  if (errors.isEmpty()) {
    return next()
  }
  const extractedErrors = []
  errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))

  return res.status(422).json({
    errors: extractedErrors,
  })
}
