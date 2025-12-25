"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExitGate = void 0;
const ParkingLot_js_1 = require("../domain/parking/ParkingLot.js");
const ParkingTicket_js_1 = require("../domain/ticket/ParkingTicket.js");
class ExitGate {
    parkingLot;
    constructor(parkingLot) {
        this.parkingLot = parkingLot;
    }
    exit(ticket) {
        return this.parkingLot.unpark(ticket);
    }
}
exports.ExitGate = ExitGate;
//# sourceMappingURL=ExitGate.js.map