import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import cookieParser from 'cookie-parser';

import './src/db/db.js';

import { isAuth } from './src/middlewares/auth.js';

import userRoutes from './src/routes/user.js';
import authRoutes from './src/routes/auth.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use(cookieParser());

app.use('/user', userRoutes);
app.use('/auth', authRoutes);

app.use(isAuth);

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});
