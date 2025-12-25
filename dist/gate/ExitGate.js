import { ParkingLot } from "../domain/parking/ParkingLot.js";
import { ParkingTicket } from "../domain/ticket/ParkingTicket.js";
export class ExitGate {
    parkingLot;
    constructor(parkingLot) {
        this.parkingLot = parkingLot;
    }
    exit(ticket) {
        return this.parkingLot.unpark(ticket);
    }
}
//# sourceMappingURL=ExitGate.js.map