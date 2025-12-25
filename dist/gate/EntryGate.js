import { ParkingLot } from "../domain/parking/ParkingLot.js";
import { Vehicle } from "../domain/vehicle/Vehicle.js";
import { ParkingTicket } from "../domain/ticket/ParkingTicket.js";
export class EntryGate {
    parkingLot;
    constructor(parkingLot) {
        this.parkingLot = parkingLot;
    }
    enter(vehicle) {
        return this.parkingLot.park(vehicle);
    }
}
//# sourceMappingURL=EntryGate.js.map