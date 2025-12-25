import { Vehicle } from "../vehicle/Vehicle.js";
import { ParkingSpot } from "../parking/ParkingSpot.js";
export class ParkingTicket {
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
//# sourceMappingURL=ParkingTicket.js.map