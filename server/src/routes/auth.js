import express from 'express';
import throttle from "express-throttle"
import authController from '../controllers/auth.js';

const router = express.Router();

// router.get('/login', authController.login);
router.post('/register', throttle({"burst":10, "period":"1min"}),authController.register);

export default router;
