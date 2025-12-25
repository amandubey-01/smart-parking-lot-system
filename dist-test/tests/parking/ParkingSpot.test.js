"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ParkingSpot_js_1 = require("../../domain/parking/ParkingSpot.js");
const SpotType_js_1 = require("../../domain/parking/SpotType.js");
const Vehicle_js_1 = require("../../domain/vehicle/Vehicle.js");
const VehicleType_js_1 = require("../../domain/vehicle/VehicleType.js");
describe("ParkingSpot", () => {
    it("should allow parking when available", () => {
        const spot = new ParkingSpot_js_1.ParkingSpot("S1", SpotType_js_1.SpotType.MEDIUM);
        const car = new Vehicle_js_1.Vehicle("DL01", VehicleType_js_1.VehicleType.CAR);
        spot.park(car);
        expect(spot.isAvailable()).toBe(false);
    });
    it("should free spot on unpark", () => {
        const spot = new ParkingSpot_js_1.ParkingSpot("S1", SpotType_js_1.SpotType.MEDIUM);
        const car = new Vehicle_js_1.Vehicle("DL01", VehicleType_js_1.VehicleType.CAR);
        spot.park(car);
        spot.unpark();
        expect(spot.isAvailable()).toBe(true);
    });
});
//# sourceMappingURL=ParkingSpot.test.js.map