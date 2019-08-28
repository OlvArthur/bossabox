import { Router } from 'express';

import ToolController from './app/controllers/ToolController';

const routes = new Router();

routes.post('/tools', ToolController.store);
routes.get('/tools', ToolController.index);
export default routes;
