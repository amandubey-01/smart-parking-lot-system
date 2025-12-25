"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const HourlyFeeCalculator_js_1 = require("../../domain/pricing/HourlyFeeCalculator.js");
const ParkingTicket_js_1 = require("../../domain/ticket/ParkingTicket.js");
const Vehicle_js_1 = require("../../domain/vehicle/Vehicle.js");
const VehicleType_js_1 = require("../../domain/vehicle/VehicleType.js");
const ParkingSpot_js_1 = require("../../domain/parking/ParkingSpot.js");
const SpotType_js_1 = require("../../domain/parking/SpotType.js");
describe("HourlyFeeCalculator", () => {
    it("should calculate fee based on duration and vehicle type", () => {
        const vehicle = new Vehicle_js_1.Vehicle("DL01", VehicleType_js_1.VehicleType.CAR);
        const spot = new ParkingSpot_js_1.ParkingSpot("S2", SpotType_js_1.SpotType.MEDIUM);
        const entry = new Date();
        const exit = new Date(entry.getTime() + 2 * 60 * 60 * 1000);
        const ticket = new ParkingTicket_js_1.ParkingTicket(vehicle, spot, entry);
        ticket.exitTime = exit;
        const calculator = new HourlyFeeCalculator_js_1.HourlyFeeCalculator();
        const fee = calculator.calculate(ticket);
        expect(fee).toBe(40); // 2 hours × ₹20
    });
});
//# sourceMappingURL=HourlyFeeCalculator.test.js.map