import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
// authentication middleware fucntions to protect certain routes taht can only be accessible when a user is autheticated.
// authenticating user using Bearer token which is generated when a user is created.
const protect = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer ')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select('-password');
      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error('Not authorized,Token Failed');
    }
  }
  if (!token) {
    res.status(401);
    throw new Error('Not authorized, No Token');
  }
});
// authentication middleware fucntions to protect certain routes
// that can only be accessible when a user is autheticated and the user is an admin because some task are for admin only.
const adminProtect = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401);
    throw new Error('Not authorized, Not Admin');
  }
};

export { protect, adminProtect };
