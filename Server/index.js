import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './Routes/authRoutes.js';
import messageRoutes from './Routes/messageRoutes.js';
import connectDB from './Database/mongodb.js';
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);

app.listen(process.env.PORT, () => {
    connectDB();
    console.log(`Server is running on port ${process.env.PORT}`);
});
