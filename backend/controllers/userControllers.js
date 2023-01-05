import asyncHandler from 'express-async-handler';
import generateToken from '../utils/generateToken.js';
import User from '../models/userModel.js';

// @desc  Auth user & get token
// @route POST api/users/login
// @access Public
//authUser controller function to authenticate/login the user from the database
//also checking if a user exists or not with the given cerdentials.
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error('Invalid Email and password');
  }
});

// @desc Register a new user
// @route GET api/users
// @access Public
//registerUser controller function to  create a new user in the databse
//and checking if the user already exixts.
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, roll, gender, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }
  const user = await User.create({ name, email, password, roll, gender });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      roll: user.roll,
      gender: user.gender,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
});
//exporting the user controller fucntion to use in the routes.
export { authUser, registerUser };
