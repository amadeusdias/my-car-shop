import { Router } from 'express';
import CarController from '../Controllers/CarController';

const routerCar = Router();

routerCar.post('/', (req, res, next) => {
  const controller = new CarController(req, res, next);
  controller.create();
});
routerCar.get('/', (req, res, next) => {
  const controller = new CarController(req, res, next);
  controller.getAll();
});
routerCar.get('/:id', (req, res, next) => {
  const controller = new CarController(req, res, next);
  controller.getById();
});
routerCar.put('/:id', (req, res, next) => {
  const controller = new CarController(req, res, next);
  controller.update();
});

export default routerCar;