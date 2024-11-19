import express from "express";
import dotenv from 'dotenv';
import databaseConnection from "./utils/database.js"
import cookieParser from 'cookie-parser';
import userRoute from './routes/userRoute.js';
import cors from 'cors';



dotenv.config({
    path: ".env"
})


databaseConnection();

const app =express();

//middlewares: 
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser());

const corsOptions = {
     origin:'http://localhost:5173',
     credentials: true
}

app.use(cors(corsOptions));

//api 
app.use("/api/v1/user", userRoute);

app.listen(process.env.PORT, () => {
      console.log(`server listen at Port ${process.env.PORT}`);
})










// import express from 'express';
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// import cors from 'cors';
// import cookieParser from 'cookie-parser';
// import userRoutes from './routes/leaves.js';
// import activityRoutes from './routes/activities.js';
// import authenticateUser from './middleware/authenticateUser.js';

// dotenv.config();

// // Initialize app
// const app = express();

// // Middleware setup
// app.use(cors({
//   origin: process.env.CLIENT_URL || 'http://localhost:5173', // Dynamic client URL
//   credentials: true,
// }));
// app.use(express.json());
// app.use(cookieParser());

// // MongoDB connection with async/await
// const connectToDatabase = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });
//     console.log('Connected to MongoDB');
//   } catch (err) {
//     console.error('MongoDB connection error:', err);
//     process.exit(1); // Exit process if connection fails
//   }
// };

// // Call MongoDB connection
// connectToDatabase();

// // API Routes with Authentication
// app.use('/api/leaves', authenticateUser, userRoutes);
// app.use('/api/updateActivity', authenticateUser, activityRoutes);

// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err);
//   res.status(err.status || 500).json({ message: err.message || 'Internal Server Error' });
// });

// // Server setup
// const port = process.env.PORT || 8000;
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });






// import express from 'express';
// import dotenv from 'dotenv';
// import mongoose from 'mongoose';
// import cors from 'cors';
// import cookieParser from 'cookie-parser';
// import userRoutes from './routes/leaves.js'; // Routes for leaves
// import activityRoutes from './routes/activities.js'; // Routes for activities
// import authenticateUser from './middleware/middleware.js';
//  // Middleware for user authentication
// import User from './routes/userRoute.js'; 




// dotenv.config(); // Load environment variables

// // Initialize app
// const app = express();

// // Middleware setup
// app.use(cors({
//   origin: process.env.CLIENT_URL || 'http://localhost:5173', // Frontend URL
//   credentials: true,
// }));
// app.use(express.json());
// app.use(cookieParser());

// // MongoDB connection setup
// const connectToDatabase = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log('Connected to MongoDB');
//   } catch (err) {
//     console.error('MongoDB connection error:', err);
//     process.exit(1); // Exit process if connection fails
//   }
// };

// // Call MongoDB connection function
// connectToDatabase();

// // Route configurations with authentication middleware
// app.use('/api/leaves', userRoutes); // Route to manage leaves
// app.use('/api/updateActivity', activityRoutes); // Route to manage activities

// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err);
//   res.status(err.status || 500).json({ message: err.message || 'Internal Server Error' });
// });

// // Server setup
// const port = process.env.PORT || 8000;
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
