import {Vehicle} from './vehicle.js'

export class Airplane extends Vehicle {
    constructor(license, latLong, model){
        super(license, latLong, model)
        this.maxDistance = null;
        this.curvature = null;
    }
}