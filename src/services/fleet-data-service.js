import { Car } from '../classes/car.js';
import { Drone } from '../classes/drone.js';
import { Boat } from '../classes/boat.js';

import { DataError } from './data-error.js';

export class FleetDataService {
  constructor() {
    this.cars = [];
    this.drones = [];
    this.errors = [];
    this.boats = [];
    this.airplanes = [];
    this.events = {};
  }
  loadFleet(fleet) {
    for (let data of fleet) {
      switch (data.type) {
        case 'car':
          if (this.validateCarData(data)) {
            let car = this.loadCar(data);
            if (car) {
              this.cars.push(car);
            }
          } else {
            let e = new DataError('Error validating car data:', data);
            this.errors.push(e);
          }
          break;
        case 'drone':
          if (this.validateDroneData(data)) {
            let drone = this.loadDrone(data);
            this.drones.push(drone);
            break;
          } else {
            let e = new DataError('error validating drone data', data);
            this.errors.push(e);
          }
        // case 'boat':
        //   if (this.validateBoatData()) {
        //     let boat = this.loadBoat(data);
        //     this.boats.push(boat);
        //     break;
        //   } else {
        //     let e = new DataError('error validating boat data', data);
        //     this.errors.push(e);
        //   }
        case 'airplane':
          let airplane = this.loadAirplane(data);
          this.airplanes.push(airplane);
          break;

        default:
          let e = new DataError('This is not a valid vehicle', data);
          this.errors.push(e);
          break;
      }
    }
  }
  loadBoat(boat) {
    try {
      let b = new Boat(boat.license, boat.model, boat.latLong);
      b.power = boat.power;
      b.motor = boat.motor;
      return b;
    } catch (e) {
      this.errors.push(
        new DataError('Something went terribly wrong when loading boat:', boat)
      );
      return e;
    }
  }
  loadAirplane(airplane) {
    try {
      let ai = new Airplane(airplane.license, airplane.model, airplane.latLong);
      ai.power = airplane.power;
      ai.motor = airplane.motor;
      return b;
    } catch (e) {
      this.errors.push(
        new DataError(
          'Something went terribly wrong when loading ariplane:',
          airplane
        )
      );
      return e;
    }
  }
  loadCar(car) {
    try {
      let c = new Car(car.license, car.model, car.latLong);
      c.miles = car.miles;
      c.make = car.make;
      return c;
    } catch (e) {
      this.errors.push(
        new DataError('Something went terribly wrong when loading car:', car)
      );
      return e;
    }
  }
  loadDrone(drone) {
    try {
      let d = new Drone(drone.license, drone.model, drone.latLong);
      d.airTimeHours = drone.airTimeHours;
      d.base = drone.base;
      return d;
    } catch (e) {
      this.errors.push(
        new DataError(
          'Something went terribly wrong when loading drone:',
          drone
        )
      );
    }
  }
  validateCarData(car) {
    let requiredProps = 'license model latLong miles make'.split(' ');
    let hasErrors = false;
    for (let field of requiredProps) {
      if (!car[field]) {
        this.errors.push(new DataError(`error with field: ${field}`));
        hasErrors = true;
      }
    }
    if (Number.isNaN(Number.parseFloat(car.miles))) {
      this.errors.push(new DataError('miles is not right', car.miles));
      hasErrors = true;
    }
    return !hasErrors;
  }
  validateDroneData(drone) {
    let hasErrors = false;
    for (let field in drone) {
      if (!drone[field]) {
        this.errors.push(new DataError(`error with field: ${field}`));
        hasErrors = true;
      }
    }
    return !hasErrors;
  }
  filterCarByMake(input) {
    return this.cars.filter(car => car.make.indexOf(input) >= 0);
  }
  filterCarsByMin(input) {
    return this.cars.filter(car => car.miles > input);
  }
  filterDroneByModel(input) {
    return this.drones.filter(drone => drone.model.indexOf(input) >= 0);
  }
  addEvent(event, handler) {
    this.events[event].push(handler);
  }
  onEvent(event, data) {
    event[handler].forEach(function() {
      handler(data);
    });
  }
  offEvent(event, handler) {
    for (let i = 1; i++; i < this.events.length - 1) {
      if (this.events[event][i] === handler) {
        this.events[event].splice(i, 1);
      }
    }
  }
  addAnotherEvent(event, handler) {
    this.events[event].push(handler);
  }
  onAnotherEvent(event, data) {
    this.events[event].forEach(function() {
      handler(data);
    });
  }
  offAnotherEvent(event, handler) {
    for (let i = 0; i++; i < this.events[events].length - 1) {
      this.events[events][1] === handler
        ? this.events[event].slice(i, 1)
        : null;
    }
  }
  addEvent(event, handler) {
    this.events[event].push(handler);
  }
  onEvent(event, data) {
    this.events[event].forEach(function() {
      handler(data);
    });
  }
  offEvent(event, handler) {
    for (let i = 0; i < this.events[event].length - 1; i++) {
      this.event[events][i] === handler
        ? this.event[events].splice(i, 1)
        : undefined;
    }
  }
  addEvent(event, handler) {
    this.events[event].push(handler);
  }
  onEvent(event, data) {
    this.events[event].forEach(function() {
      handler(data);
    });
  }
  offEvent(event, handler) {
    for (let i = 0; i < this.events[event].length - 1; i++) {
      this.event[events][i] === handler
        ? this.event[events].splice(i, 1)
        : undefined;
    }
  }
}
