import { Vehicle } from "./domain/vehicle/Vehicle.js";
import { VehicleType } from "./domain/vehicle/VehicleType.js";
import { ParkingSpot } from "./domain/parking/ParkingSpot.js";
import { SpotType } from "./domain/parking/SpotType.js";
import { ParkingFloor } from "./domain/parking/ParkingFloor.js";
import { ParkingLot } from "./domain/parking/ParkingLot.js";
import {NearestSpotStrategy} from "./strategy/NearestSpotStrategy.js";
import { HourlyFeeCalculator } from "./domain/pricing/HourlyFeeCalculator.js";
import { EntryGate } from "./gate/EntryGate.js";
import { ExitGate } from "./gate/ExitGate.js";


const spots = [
  new ParkingSpot("S1", SpotType.SMALL),
  new ParkingSpot("S2", SpotType.MEDIUM),
  new ParkingSpot("S3", SpotType.LARGE),
];

const floor = new ParkingFloor(1, spots);
const parkingLot = new ParkingLot([floor], new NearestSpotStrategy(), new HourlyFeeCalculator);

const entryGate = new EntryGate(parkingLot);
const exitGate = new ExitGate(parkingLot);

const car = new Vehicle("DL01AB1234", VehicleType.CAR);
const ticket = entryGate.enter(car);


console.log("Vehicle parked at:", ticket.spot.getLocation());

// simulate time delay if needed

const fee = exitGate.exit(ticket);
console.log("Parking fee:", fee);