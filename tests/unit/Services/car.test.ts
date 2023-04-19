import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import Car from '../../../src/Domains/Car';
import ICar from '../../../src/Interfaces/ICar';
import CarService from '../../../src/Services/CarService';

const carInput: ICar = {
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};

const carOutput: ICar = {
  id: '6348513f34c397abcad040b2',
  model: 'Marea',
  year: 2002,
  color: 'Black',
  status: true,
  buyValue: 15.990,
  doorsQty: 4,
  seatsQty: 5,
};

const allCarOutput: ICar[] = [
  {
    id: '634852326b35b59438fbea2f',
    model: 'Marea',
    year: 2002,
    color: 'Black',
    status: true,
    buyValue: 15.99,
    doorsQty: 4,
    seatsQty: 5,
  },
  {
    id: '634852326b35b59438fbea31',
    model: 'Tempra',
    year: 1995,
    color: 'Black',
    status: false,
    buyValue: 39,
    doorsQty: 2,
    seatsQty: 5,
  },
];

const carId = '634852326b35b59438fbea2f';

describe('Testa a camada Service da rota /cars', function () {
  it('testa o registro de um carro novo', async function () {
    const carService = new CarService();

    sinon.stub(Model, 'create').resolves(carOutput);

    const car = await carService.create(carInput);

    expect(car).to.be.an.instanceOf(Car);
    sinon.restore();
  });

  it('testa a busca de todos os carros', async function () {
    const carService = new CarService();
    sinon.stub(Model, 'find').resolves(allCarOutput);

    const cars = await carService.getAll();

    expect(cars).to.be.deep.equal(allCarOutput);

    sinon.restore();
  });

  it('testa a busca de um carro pelo id', async function () {
    const carService = new CarService();
    sinon.stub(Model, 'findById').resolves(carOutput);
    const car = await carService.getById(carId);
    expect(car).to.be.deep.equal(carOutput);
  });
});
