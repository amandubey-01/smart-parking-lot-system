"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NearestSpotStrategy = void 0;
const Vehicle_js_1 = require("../domain/vehicle/Vehicle.js");
const ParkingFloor_js_1 = require("../domain/parking/ParkingFloor.js");
const ParkingSpot_js_1 = require("../domain/parking/ParkingSpot.js");
class NearestSpotStrategy {
    findSpot(vehicle, floors) {
        for (const floor of floors) {
            const spot = floor.findAvailableSpot(vehicle);
            if (spot) {
                return spot;
            }
        }
        return null;
    }
}
exports.NearestSpotStrategy = NearestSpotStrategy;
//# sourceMappingURL=NearestSpotStrategy.js.map