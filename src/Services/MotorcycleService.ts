// import { isValidObjectId } from 'mongoose';
// import NewCustomError from '../utils/customError';
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
}

export default MotorcycleService;