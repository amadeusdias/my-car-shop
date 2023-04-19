import { isValidObjectId } from 'mongoose';
import NewError from '../utils/customError';
import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import CarModel from '../Models/CarModel';

class CarService {
  private carDomain(car: ICar | null): Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  public async create(car: ICar) {
    const carModel = new CarModel();
    const createdCar = await carModel.create(car);
    return this.carDomain(createdCar);
  }

  public async getAll() {
    const carModel = new CarModel();
    const cars = await carModel.getAll();
    return cars.map((car) => this.carDomain(car));
  }

  public async getById(id: string) {
    if (!isValidObjectId(id)) throw new NewError('404', 'Invalid Mongo id');
    const carModel = new CarModel();
    const car = await carModel.getById(id);
    if (!car) throw new NewError('404', 'Car not found');
    return this.carDomain(car);
  }
}

export default CarService;