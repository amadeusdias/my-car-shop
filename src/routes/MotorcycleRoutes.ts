import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcyclesController';

const routerMotorcycle = Router();

routerMotorcycle.post('/', (req, res, next) => {
  const controller = new MotorcycleController(req, res, next);
  controller.create();
});

export default routerMotorcycle;