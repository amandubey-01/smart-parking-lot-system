"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ParkingLot_js_1 = require("../../domain/parking/ParkingLot.js");
const ParkingFloor_js_1 = require("../../domain/parking/ParkingFloor.js");
const ParkingSpot_js_1 = require("../../domain/parking/ParkingSpot.js");
const SpotType_js_1 = require("../../domain/parking/SpotType.js");
const Vehicle_js_1 = require("../../domain/vehicle/Vehicle.js");
const VehicleType_js_1 = require("../../domain/vehicle/VehicleType.js");
const NearestSpotStrategy_js_1 = require("../../strategy/NearestSpotStrategy.js");
const HourlyFeeCalculator_js_1 = require("../../domain/pricing/HourlyFeeCalculator.js");
describe("ParkingLot", () => {
    it("should park and unpark vehicle correctly", () => {
        const spots = [
            new ParkingSpot_js_1.ParkingSpot("S1", SpotType_js_1.SpotType.SMALL),
            new ParkingSpot_js_1.ParkingSpot("S2", SpotType_js_1.SpotType.MEDIUM),
        ];
        const floor = new ParkingFloor_js_1.ParkingFloor(1, spots);
        const lot = new ParkingLot_js_1.ParkingLot([floor], new NearestSpotStrategy_js_1.NearestSpotStrategy(), new HourlyFeeCalculator_js_1.HourlyFeeCalculator());
        const car = new Vehicle_js_1.Vehicle("DL01", VehicleType_js_1.VehicleType.CAR);
        const ticket = lot.park(car);
        expect(ticket.spot.id).toBe("S2");
        expect(ticket.spot.isAvailable()).toBe(false);
        const fee = lot.unpark(ticket);
        expect(fee).toBeGreaterThan(0);
        expect(ticket.spot.isAvailable()).toBe(true);
    });
});
//# sourceMappingURL=ParkingLot.test.js.map