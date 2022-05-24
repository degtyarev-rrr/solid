/* Open-closed Principle */

/* Violation of the open-closed principle */
/*
class Vehicle {
  private _color: string;
  private _type: string;
  private _price: number;

  constructor (type: string, color: string, price: number) {
    this._type = type;
    this._color = color;
    this._price = price;
  }

  findTypeOfCoverage (): string {
    if(this._type === 'Car') return 'Road';
    if(this._type === 'Plane') return 'Air';
    if(this._type === 'Boat') return 'Water';

    return 'That type does not exist!'
  }
}

const plane: Vehicle = new Vehicle('Plane', 'Green', 500000);
const boat: Vehicle = new Vehicle('Boat', 'Black', 100000);

console.log(plane.findTypeOfCoverage());
console.log(boat.findTypeOfCoverage()); 
*/


/*  Implementation of the  open-closed  principle */
namespace OPC {
  class Vehicle {
    private _color: string;
    private _type: string;
    private _price: number;
  
    constructor (type: string, color: string, price: number) {
      this._type = type;
      this._color = color;
      this._price = price;
    }
  
    findTypeOfCoverage (): string {
      return 'You need create a vehicle with type!';
    }
  }
  
  class Car extends Vehicle {
    constructor(color: string, price: number) {
      super('Car', color, price);
    }
  
    findTypeOfCoverage(): string {
        return 'Road';
    }
  }
  
  class Boat extends Vehicle {
    constructor(color: string, price: number) {
      super('Boat', color, price);
    }
  
    findTypeOfCoverage(): string {
        return 'Water';
    }
  }
  
  class Plane extends Vehicle {
    constructor(color: string, price: number) {
      super('Plane', color, price);
    }
  
    findTypeOfCoverage(): string {
        return 'Air';
    }
  }
  
  const plane: Plane = new Plane ('Green', 500000);
  const boat: Boat = new Boat('Black', 100000);
  
  console.log(plane.findTypeOfCoverage());
  console.log(boat.findTypeOfCoverage()); 
}
