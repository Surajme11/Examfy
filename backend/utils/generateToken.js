import jwt from 'jsonwebtoken';

// from this generateToken function we are genetrating the unique jwt token for
//each user so that we can use it latter for authorization or authentication with Bearer methods.
const generateToken = (id) => {
  return jwt.sign(
    {
      id,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '30d',
    }
  );
};

export default generateToken;
