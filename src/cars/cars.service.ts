import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    {
      id: 1,
      brand: 'Toyota',
      model: 'Corolla',
    },
    {
      id: 2,
      brand: 'Honda',
      model: 'Civic',
    },

    {
      id: 3,
      brand: 'Jeep',
      model: 'Cherokee',
    },
  ];

  public findAll() {
    return this.cars;
  }

  findOneById(id: number) {
    // encontrar el carro, cuyo id del arreglo sea exactamente igual al id por parámetro
    const car = this.cars.find((car) => car.id === id);
    if (!car) throw new NotFoundException(`Car with id '${id}' does not exist`);

    return car;
  }
}
