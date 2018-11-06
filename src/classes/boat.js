import {Vehicle} from './vehicle.js'

export class Boat extends Vehicle {
    constructor(license, model, latLong){
        super(license, model, latLong)
        this.power = null;
        this.motor = null;
    }
}