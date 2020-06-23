import { Router } from 'express';
import UserController from '../controllers/User.controller';

const routes = Router();

const userController = new UserController();

routes.get('/users', userController.list);
routes.post('/create/user', userController.create)

export default routes;