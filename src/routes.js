import { Router } from 'express';

import ToolController from './app/controllers/ToolController';
import SessionController from './app/controllers/SessionController';
import UserController from './app/controllers/UserController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.post('/tools', ToolController.store);
routes.get('/tools', ToolController.index);
routes.delete('/tools/:id', ToolController.delete);

export default routes;
