import {Vehicle} from './vehicle.js';

export class Drone extends Vehicle {

    constructor(license, model, latLong) {
        super(license, model, latLong);
        this.airTimeHours = null; // these two props are the unique fields in Drones
        this.base = null;
    }
}