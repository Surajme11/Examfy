import express from 'express';
import { authUser, registerUser } from '../controllers/userControllers.js';
import { protect, adminProtect } from '../middleware/authMiddleware.js';
const router = express.Router();
// setting the server routes to access different functions and method.
// for the first route we are adding a post requestion to 'router/' in our case the router is
//'/api/users' so we are requesting a post request at this route '/api/users/' to register a new using.
// and for the second one we are doing a post request to '/api/users/login' to login the user.
router.route('/').post(registerUser).get(protect, adminProtect);
router.post('/login', authUser);

export default router;
