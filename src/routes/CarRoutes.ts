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

export default routerCar;