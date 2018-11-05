import {Car} from './classes/car.js';
import {Drone} from './classes/drone.js';
import {fleet} from './fleet-data.js';
import {FleetDataService} from './services/fleet-data-service.js';

let dataService = new FleetDataService();
//console.log(dataService)
//console.log(fleet)
dataService.loadFleet(fleet)

for (let car of dataService.cars)
console.log(car.license
)

for (let drone of dataService.drones)
console.log(drone)