import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
// connectDB function to connect the server to the mongoDB database using
//the mongo uri.
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error:${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
