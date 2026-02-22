import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import cookieParser from 'cookie-parser';

import './src/db/db.js';

import { authMiddleware } from './src/middlewares/authMiddleware.js';
import { errorMiddleware } from './src/middlewares/errorMiddleware.js';

import userRoutes from './src/routes/user.js';
import authRoutes from './src/routes/auth.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use(cookieParser());

app.use('/user', userRoutes);
app.use('/auth', authRoutes);

app.use(authMiddleware);
app.use(errorMiddleware)

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});
