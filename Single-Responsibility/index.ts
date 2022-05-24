/* Single-Responsibility Principle */

/* Violation of the single-responsibility principle */

/*
class Car {
  private _color: string;
  private _model: string;
  private _price: number;

  constructor (model: string, color: string, price: number) {
    this._model = model;
    this._color = color;
    this._price = price;
  }

  createCar = (): string => {
    return `I create ${this._color} ${this._model} with a price ${this._price}$`; 
  } 
  
  createCarDocumentation= (): string => {
    return `I create documentation for ${this._model}`; 
  }
}

const car: Car = new Car('BMW', 'black', 10000);

console.log(car.createCar());
console.log(car.createCarDocumentation()); 
*/


/*  Implementation of the  single-responsibility principle */
namespace SRP {
  class Car {
    private _color: string;
    private _model: string;
    private _price: number;
  
    constructor (model: string, color: string, price: number) {
      this._model = model;
      this._color = color;
      this._price = price;
    }
  
    createCar = (): string => {
      return `I create ${this._color} ${this._model} with a price ${this._price}$`; 
    } 
  }
  
  class Documentation {
    private _model: string;
  
    constructor(model: string) {
      this._model = model;
    }
  
    createCarDocumentation= (): string => {
      return `I create documentation for ${this._model}`; 
    }
  }
  
  const car: Car = new Car('BMW', 'black', 10000);
  const documentationForBMW = new Documentation('BMW');
  const documentationForTesla = new Documentation('Tesla');
  
  console.log(car.createCar());
  console.log(documentationForBMW.createCarDocumentation()); 
  console.log(documentationForTesla.createCarDocumentation()); 
}
