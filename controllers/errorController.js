const AppError = require('./../utils/appError');

const handelJWTError = err => new AppError('Invalid token. Please log in again!', 401);
const handelJWTExpiredError = err => new AppError('Token expired !! Please log in again',401);
if(error.name === 'JsonWebTokenError') error = handelJWTError(error);
if(error.name === 'TokenExpiredError') error = handelJWTExpiredError(error);