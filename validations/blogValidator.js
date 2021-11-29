const { body, validationResult } = require('express-validator')

exports.createBlogValidation = () => {
  return [
    //body('username').isEmail(),
    body('name').trim().isLength({ min: 1 , max: 1000}).withMessage('Blog should have a title'),
    body('description').trim().isLength({ min: 1 , max: 10000}).withMessage('Blog Should have a description'),
  ]
}

exports.updateBlogValidation = () => {
    return [
      body('name').trim().isLength({ min: 1 , max: 1000}).withMessage('Blog should have a title'),
      body('description').trim().isLength({ min: 1 , max: 10000}).withMessage('Blog should have a description'),
    ]
  }

exports.validate = (req, res, next) => {
  const errors = validationResult(req)
  if (errors.isEmpty()) {
    return next()
  }
  const extractedErrors = []
  errors.array().map(err => extractedErrors.push( err.msg ))

  return res.status(422).json({
    errors: extractedErrors,
  })
}
