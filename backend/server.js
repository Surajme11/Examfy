import express from 'express';
import dotenv from 'dotenv';

import userRoutes from './routes/userRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';
// connecting server to database.
connectDB();
dotenv.config();
//creating an express server
const app = express();
app.use(express.json());
// running a demo get request to check if the server is working fine or not.
app.get('/', (req, res) => {
  res.send('api running');
});

//the main route that the server is going to use.
app.use('/api/users', userRoutes);
// adding the error middleware for errors.
app.use(notFound);
app.use(errorHandler);
// setting port on which the server will be running.
const PORT = process.env.PORT || 5000;

// starting the server.
app.listen(PORT, console.log(`server running on port ${PORT}`));
