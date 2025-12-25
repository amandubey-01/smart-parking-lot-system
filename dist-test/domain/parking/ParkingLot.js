"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParkingLot = void 0;
const ParkingFloor_js_1 = require("./ParkingFloor.js");
const Vehicle_js_1 = require("../vehicle/Vehicle.js");
const ParkingTicket_js_1 = require("../ticket/ParkingTicket.js");
class ParkingLot {
    floors;
    strategy;
    feeCalculator;
    constructor(floors, strategy, feeCalculator) {
        this.floors = floors;
        this.strategy = strategy;
        this.feeCalculator = feeCalculator;
    }
    park(vehicle) {
        const spot = this.strategy.findSpot(vehicle, this.floors);
        if (!spot)
            throw new Error("No spot available");
        spot.park(vehicle);
        return new ParkingTicket_js_1.ParkingTicket(vehicle, spot, new Date());
    }
    unpark(ticket) {
        ticket.exitTime = new Date();
        ticket.spot.unpark();
        const fee = this.feeCalculator.calculate(ticket);
        ticket.fee = fee;
        return fee;
    }
}
exports.ParkingLot = ParkingLot;
//# sourceMappingURL=ParkingLot.js.map