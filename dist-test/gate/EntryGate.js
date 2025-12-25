"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntryGate = void 0;
const ParkingLot_js_1 = require("../domain/parking/ParkingLot.js");
const Vehicle_js_1 = require("../domain/vehicle/Vehicle.js");
const ParkingTicket_js_1 = require("../domain/ticket/ParkingTicket.js");
class EntryGate {
    parkingLot;
    constructor(parkingLot) {
        this.parkingLot = parkingLot;
    }
    enter(vehicle) {
        return this.parkingLot.park(vehicle);
    }
}
exports.EntryGate = EntryGate;
//# sourceMappingURL=EntryGate.js.map