"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParkingFloor = void 0;
const ParkingSpot_js_1 = require("./ParkingSpot.js");
const Vehicle_js_1 = require("../vehicle/Vehicle.js");
const SpotType_js_1 = require("./SpotType.js");
const VehicleType_js_1 = require("../vehicle/VehicleType.js");
class ParkingFloor {
    floorNumber;
    spots;
    constructor(floorNumber, spots) {
        this.floorNumber = floorNumber;
        this.spots = spots;
        this.spots.forEach(spot => spot.assignFloor(this.floorNumber));
    }
    findAvailableSpot(vehicle) {
        return (this.spots.find(spot => spot.isAvailable() &&
            this.canFit(vehicle.type, spot.type)));
    }
    canFit(vehicle, spot) {
        if (vehicle === VehicleType_js_1.VehicleType.MOTORCYCLE)
            return true;
        if (vehicle === VehicleType_js_1.VehicleType.CAR)
            return spot !== SpotType_js_1.SpotType.SMALL;
        if (vehicle === VehicleType_js_1.VehicleType.BUS)
            return spot === SpotType_js_1.SpotType.LARGE;
        return false;
    }
}
exports.ParkingFloor = ParkingFloor;
//# sourceMappingURL=ParkingFloor.js.map