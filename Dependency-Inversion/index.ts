/* Dependency Inversion Principle */

/* Violation of the Dependency Inversion Principle */ 
/*
class CarMotor {
  getMotor() : string {
    return `It's car motor`;
  }
}

class Vehicle {
  private _motor: string;

  constructor(motor: CarMotor) {
    this._motor = motor.getMotor();
  }

  get motor() {
    return this._motor;
  }
}

const motor = new CarMotor();
const car = new Vehicle(motor);

console.log(car.motor);
*/

/*  Implementation of the Dependency Inversion Principle */
namespace DIP {
  interface IMotor {
    getMotor() : string;
  }

  class CarMotor implements IMotor {
    getMotor(): string {
      return `It's car motor`;
    }
  }

  class PlaneMotor implements IMotor {
    getMotor(): string {
      return `It's plane motor`;
    }
  }

  class BoatMotor implements IMotor {
    getMotor(): string {
      return `It's boat motor`;
    }
  }

  class Vehicle {
    private _motor: string;
  
    constructor(motor: IMotor) {
      this._motor = motor.getMotor();
    }
  
    get motor() {
      return this._motor;
    }
  }

  const carMotor = new CarMotor();
  const planeMotor = new PlaneMotor();
  const boatMotor = new BoatMotor();

  const plane = new Vehicle(planeMotor);
  const car = new Vehicle(carMotor);
  const boat = new Vehicle(boatMotor);
  
  console.log(boat.motor);
  console.log(plane.motor);
  console.log(car.motor);
}
