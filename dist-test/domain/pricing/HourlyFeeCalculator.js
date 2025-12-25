"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HourlyFeeCalculator = void 0;
const ParkingTicket_js_1 = require("../ticket/ParkingTicket.js");
const VehicleType_js_1 = require("../vehicle/VehicleType.js");
class HourlyFeeCalculator {
    calculate(ticket) {
        if (!ticket.exitTime) {
            throw new Error("Vehicle has not exited yet");
        }
        const durationMs = ticket.exitTime.getTime() - ticket.entryTime.getTime();
        const hours = Math.ceil(durationMs / (1000 * 60 * 60));
        switch (ticket.vehicle.type) {
            case VehicleType_js_1.VehicleType.MOTORCYCLE:
                return hours * 10;
            case VehicleType_js_1.VehicleType.CAR:
                return hours * 20;
            case VehicleType_js_1.VehicleType.BUS:
                return hours * 50;
        }
    }
}
exports.HourlyFeeCalculator = HourlyFeeCalculator;
//# sourceMappingURL=HourlyFeeCalculator.js.map