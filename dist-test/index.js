"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Vehicle_js_1 = require("./domain/vehicle/Vehicle.js");
const VehicleType_js_1 = require("./domain/vehicle/VehicleType.js");
const ParkingSpot_js_1 = require("./domain/parking/ParkingSpot.js");
const SpotType_js_1 = require("./domain/parking/SpotType.js");
const ParkingFloor_js_1 = require("./domain/parking/ParkingFloor.js");
const ParkingLot_js_1 = require("./domain/parking/ParkingLot.js");
const NearestSpotStrategy_js_1 = require("./strategy/NearestSpotStrategy.js");
const HourlyFeeCalculator_js_1 = require("./domain/pricing/HourlyFeeCalculator.js");
const EntryGate_js_1 = require("./gate/EntryGate.js");
const ExitGate_js_1 = require("./gate/ExitGate.js");
const spots = [
    new ParkingSpot_js_1.ParkingSpot("S1", SpotType_js_1.SpotType.SMALL),
    new ParkingSpot_js_1.ParkingSpot("S2", SpotType_js_1.SpotType.MEDIUM),
    new ParkingSpot_js_1.ParkingSpot("S3", SpotType_js_1.SpotType.LARGE),
];
const floor = new ParkingFloor_js_1.ParkingFloor(1, spots);
const parkingLot = new ParkingLot_js_1.ParkingLot([floor], new NearestSpotStrategy_js_1.NearestSpotStrategy(), new HourlyFeeCalculator_js_1.HourlyFeeCalculator);
const entryGate = new EntryGate_js_1.EntryGate(parkingLot);
const exitGate = new ExitGate_js_1.ExitGate(parkingLot);
const car = new Vehicle_js_1.Vehicle("DL01AB1234", VehicleType_js_1.VehicleType.CAR);
const ticket = entryGate.enter(car);
console.log("Vehicle parked at:", ticket.spot.getLocation());
// simulate time delay if needed
const fee = exitGate.exit(ticket);
console.log("Parking fee:", fee);
//# sourceMappingURL=index.js.map