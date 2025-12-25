"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParkingTicket = void 0;
const Vehicle_js_1 = require("../vehicle/Vehicle.js");
const ParkingSpot_js_1 = require("../parking/ParkingSpot.js");
class ParkingTicket {
    vehicle;
    spot;
    entryTime;
    exitTime;
    fee;
    constructor(vehicle, spot, entryTime) {
        this.vehicle = vehicle;
        this.spot = spot;
        this.entryTime = entryTime;
    }
}
exports.ParkingTicket = ParkingTicket;
//# sourceMappingURL=ParkingTicket.js.map