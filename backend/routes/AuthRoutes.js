import express from 'express';
import { getAllUsers, userLogin, userSignUp } from '../controller/AuthController.js';

const authRouter = express.Router();

authRouter.post('/login',userLogin);
authRouter.post('/signup',userSignUp);
authRouter.get('/users',getAllUsers);

export default authRouter;