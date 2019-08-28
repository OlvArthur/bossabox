import { Router } from 'express';

import ToolController from './app/controllers/ToolController';

const routes = new Router();

routes.post('/tools', ToolController.store);
routes.get('/tools', ToolController.index);
routes.delete('/tools/:id', ToolController.delete);

export default routes;
