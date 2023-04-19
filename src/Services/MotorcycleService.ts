import { isValidObjectId } from 'mongoose';
import NewCustomError from '../utils/customError';
import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleModel from '../Models/MotorcycleModel';

class MotorcycleService {
  private motorcycleDomain(motorcycle: IMotorcycle | null): Motorcycle | null {
    if (motorcycle) {
      return new Motorcycle(motorcycle);
    }
    return null;
  }

  public async create(motorcycle: IMotorcycle) {
    const motorcycleModel = new MotorcycleModel();
    const createdMotorcycle = await motorcycleModel.create(motorcycle);
    return this.motorcycleDomain(createdMotorcycle);
  }

  public async getAll() {
    const motorcycleModel = new MotorcycleModel();
    const motorcycles = await motorcycleModel.getAll();
    return motorcycles.map((motorcycle) => this.motorcycleDomain(motorcycle));
  }

  public async getById(id: string) {
    if (!isValidObjectId(id)) {
      throw new NewCustomError('422', 'Invalid mongo id');
    }
    const motorcycleModel = new MotorcycleModel();
    const motorcycle = await motorcycleModel.getById(id);
    if (!motorcycle) {
      throw new NewCustomError('404', 'Motorcycle not found');
    }
    return this.motorcycleDomain(motorcycle);
  }

  public async update(id: string, motorcycle: Partial<IMotorcycle>) {
    if (!isValidObjectId(id)) {
      throw new NewCustomError('422', 'Invalid mongo id');
    }
    const motorcycleModel = new MotorcycleModel();
    const updatedMotorcycle = await motorcycleModel.update(id, motorcycle);
    if (!updatedMotorcycle) {
      throw new NewCustomError('404', 'Motorcycle not found');
    }
    return this.motorcycleDomain(updatedMotorcycle);
  }
}

export default MotorcycleService;