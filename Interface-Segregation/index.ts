/* Interface Segregation Principle */

/* Violation of the Interface Segregation Principle */ 
/*
interface IVehicle {
  renderBoat(): string;
  renderCar(): string;
  renderPlane(): string;
}

class Car implements IVehicle {
  renderBoat(): string {
      return `it's not a boat`;
  }

  renderPlane(): string {
    return `it's not a plane`;
}

  renderCar(): string {
    return `it's a car! I can render`;
  }

}

const car = new Car();
console.log(car.renderCar());
*/


/*  Implementation of the Interface Segregation Principle */
namespace LSP {
  interface IVehicle {
    render(): string;
  }

  interface ICar {
    renderCar(): string;
  }

  interface IPlane {
    renderPlane(): string;
  }

  interface IBoat {
    renderBoat(): string;
  }

  class Car implements ICar {
    renderCar(): string {
      return `it's a car! I can render`;
    }
  }

  class Plane implements IPlane {
    renderPlane(): string {
      return `it's a plane! I can render`;
    }
  }

  class Boat implements IBoat {
    renderBoat(): string {
      return `it's a boat! I can render`;
    }
  }

  class Vehicle implements IVehicle {
    render(): string {
      return `it's a vehicle! I can render`;
    }
  }

  const car = new Car();
  const plane = new Plane();
  const boat = new Boat();
  const vehicle = new Vehicle();

  console.log(car.renderCar());
  console.log(plane.renderPlane());
  console.log(boat.renderBoat());
  console.log(vehicle.render());
}
