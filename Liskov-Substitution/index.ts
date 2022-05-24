/* Liskov Substitution Principle*/

/* Violation of the Liskov Substitution principle */ 
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
}

class Car extends Vehicle {
  constructor(color: string, price: number,) {
    super('Car', color, price);
  }

  renderCar(): string {
      return 'Show car';
  }
}

class Boat extends Vehicle {
  constructor(color: string, price: number) {
    super('Boat', color, price);
  }

  renderBoat(): string {
      return 'Show boat';
  }
}

class Plane extends Vehicle {
  constructor(color: string, price: number) {
    super('Plane', color, price);
  }

  renderPlane(): string {
      return 'Show plane';
  }
}

const renderVehicle = (vehicle: Vehicle): string => {
  if(vehicle instanceof Plane) return vehicle.renderPlane();
  if(vehicle instanceof Car) return vehicle.renderCar();
  if(vehicle instanceof Boat) return vehicle.renderBoat();

  return 'That type does not exist!';
}

const car = new Car('blue', 10000);
const boat = new Boat('red', 1000000);
const plane = new Plane('black', 1000000);

console.log(renderVehicle(car));
console.log(renderVehicle(boat));
console.log(renderVehicle(plane));
*/


/*  Implementation of the  Liskov Substitution principle */
namespace LSP {
  class Vehicle {
    private _color: string;
    private _type: string;
    private _price: number;
  
    constructor (type: string, color: string, price: number) {
      this._type = type;
      this._color = color;
      this._price = price;
    }

    render() : string {
      return 'Render base Vehicle';
    }
  }
  
  class Car extends Vehicle {
    constructor(color: string, price: number,) {
      super('Car', color, price);
    }
  
    render(): string {
        return 'Show car';
    }
  }
  
  class Boat extends Vehicle {
    constructor(color: string, price: number) {
      super('Boat', color, price);
    }
  
    render(): string {
        return 'Show boat';
    }
  }
  
  class Plane extends Vehicle {
    constructor(color: string, price: number) {
      super('Plane', color, price);
    }
  
    render(): string {
        return 'Show plane';
    }
  }
  
  const renderVehicle = (vehicle: Vehicle): string => {
    return vehicle.render();  
  }
  
  const car = new Car('blue', 10000);
  const boat = new Boat('red', 1000000);
  const plane = new Plane('black', 1000000);
  const vehicle = new Vehicle('UFO', 'rainbow', 9999999999999);
  
  console.log(renderVehicle(car));
  console.log(renderVehicle(boat));
  console.log(renderVehicle(plane));
  console.log(renderVehicle(vehicle));

}
