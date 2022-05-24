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
var DIP;
(function (DIP) {
    var CarMotor = /** @class */ (function () {
        function CarMotor() {
        }
        CarMotor.prototype.getMotor = function () {
            return "It's car motor";
        };
        return CarMotor;
    }());
    var PlaneMotor = /** @class */ (function () {
        function PlaneMotor() {
        }
        PlaneMotor.prototype.getMotor = function () {
            return "It's plane motor";
        };
        return PlaneMotor;
    }());
    var BoatMotor = /** @class */ (function () {
        function BoatMotor() {
        }
        BoatMotor.prototype.getMotor = function () {
            return "It's boat motor";
        };
        return BoatMotor;
    }());
    var Vehicle = /** @class */ (function () {
        function Vehicle(motor) {
            this._motor = motor.getMotor();
        }
        Object.defineProperty(Vehicle.prototype, "motor", {
            get: function () {
                return this._motor;
            },
            enumerable: false,
            configurable: true
        });
        return Vehicle;
    }());
    var carMotor = new CarMotor();
    var planeMotor = new PlaneMotor();
    var boatMotor = new BoatMotor();
    var plane = new Vehicle(planeMotor);
    var car = new Vehicle(carMotor);
    var boat = new Vehicle(boatMotor);
    console.log(boat.motor);
    console.log(plane.motor);
    console.log(car.motor);
})(DIP || (DIP = {}));
