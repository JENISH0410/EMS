import express from 'express';
import { userLogin, userSignUp } from '../controller/AuthController.js';

const authRouter = express.Router();

authRouter.post('/login',userLogin)
authRouter.post('/signup',userSignUp)

export default authRouter;