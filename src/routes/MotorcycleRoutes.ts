import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcyclesController';

const routerMotorcycle = Router();

routerMotorcycle.post('/', (req, res, next) => {
  const controller = new MotorcycleController(req, res, next);
  controller.create();
});

routerMotorcycle.get('/', (req, res, next) => {
  const controller = new MotorcycleController(req, res, next);
  controller.getAll();
});

routerMotorcycle.get('/:id', (req, res, next) => {
  const controller = new MotorcycleController(req, res, next);
  controller.getById();
});

routerMotorcycle.put('/:id', (req, res, next) => {
  const controller = new MotorcycleController(req, res, next);
  controller.update();
});

export default routerMotorcycle;