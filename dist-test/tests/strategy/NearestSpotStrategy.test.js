"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NearestSpotStrategy_js_1 = require("../../strategy/NearestSpotStrategy.js");
const ParkingSpot_js_1 = require("../../domain/parking/ParkingSpot.js");
const ParkingFloor_js_1 = require("../../domain/parking/ParkingFloor.js");
const SpotType_js_1 = require("../../domain/parking/SpotType.js");
const Vehicle_js_1 = require("../../domain/vehicle/Vehicle.js");
const VehicleType_js_1 = require("../../domain/vehicle/VehicleType.js");
describe("NearestSpotStrategy", () => {
    it("should allocate nearest compatible spot", () => {
        const spots = [
            new ParkingSpot_js_1.ParkingSpot("S1", SpotType_js_1.SpotType.SMALL),
            new ParkingSpot_js_1.ParkingSpot("S2", SpotType_js_1.SpotType.MEDIUM),
        ];
        const floor = new ParkingFloor_js_1.ParkingFloor(1, spots);
        const car = new Vehicle_js_1.Vehicle("DL01", VehicleType_js_1.VehicleType.CAR);
        const strategy = new NearestSpotStrategy_js_1.NearestSpotStrategy();
        const spot = strategy.findSpot(car, [floor]);
        expect(spot?.id).toBe("S2");
    });
});
//# sourceMappingURL=NearestSpotStrategy.test.js.map