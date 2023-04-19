import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
// import Motorcycle from '../../../src/Domains/Motorcycle';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import MotorcycleService from '../../../src/Services/MotorcycleService';

const motorcycleInput: IMotorcycle = {
  model: 'Honda Cb 600f Hornet',
  year: 2005,
  color: 'Yellow',
  status: true,
  buyValue: 30.000,
  category: 'Street',
  engineCapacity: 600,
};

const allMotorcycleOutput = [
  {
    id: '634852326b35b59438fbea2f',
    model: 'Honda Cb 600f Hornet',
    year: 2005,
    color: 'Yellow',
    status: true,
    buyValue: 30.000,
    category: 'Street',
    engineCapacity: 600,
  },
  {
    id: '634852326b35b59438fbea31',
    model: 'Honda Cbr 1000rr',
    year: 2011,
    color: 'Orange',
    status: true,
    buyValue: 59.900,
    category: 'Street',
    engineCapacity: 1000,
  },
];

const motorcycleId = '634852326b35b59438fbea2f';

describe('Testa a camada Service da rota /motorcycles', function () {
  const motorcycleOutput: IMotorcycle = {
    id: '634852326b35b59438fbea31',
    model: 'Honda Cbr 1000rr',
    year: 2011,
    color: 'Orange',
    status: true,
    buyValue: 59.900,
    category: 'Street',
    engineCapacity: 1000,
  };

  it('testa o registro de uma moto nova', async function () {
    const motorcycleService = new MotorcycleService();
    
    sinon.stub(Model, 'create').resolves(motorcycleOutput);
    const motorcycle = await motorcycleService.create(motorcycleInput);

    expect(motorcycle).to.be.deep.equal(motorcycleOutput);
    sinon.restore();
  });

  it('testa a busca de todas as motos', async function () {
    const motorcycleService = new MotorcycleService();
    sinon.stub(Model, 'find').resolves(allMotorcycleOutput);
    const motorcycles = await motorcycleService.getAll();
    expect(motorcycles).to.be.deep.equal(allMotorcycleOutput);
  });
  
  it('testa a busca de uma moto pelo id', async function () {
    const motorcycleService = new MotorcycleService();
    sinon.stub(Model, 'findById').resolves(motorcycleOutput);
    const motorcycle = await motorcycleService.getById(motorcycleId);
    expect(motorcycle).to.be.deep.equal(motorcycleOutput);
  });

  it('testa a atualização de uma moto', async function () {
    const motorcycleService = new MotorcycleService();
    sinon.stub(Model, 'findByIdAndUpdate').resolves(motorcycleOutput);
    const motorcycle = await motorcycleService.update(motorcycleId, motorcycleInput);
    expect(motorcycle).to.be.deep.equal(motorcycleOutput);
  });
});