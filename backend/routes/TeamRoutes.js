import express from 'express';
import { createTeam } from '../controller/TeamController.js';

const teamRouter = express.Router();

teamRouter.post('/',createTeam)

export default teamRouter;