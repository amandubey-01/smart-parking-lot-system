import { ParkingLot } from "../domain/parking/ParkingLot.js";
import { ParkingTicket } from "../domain/ticket/ParkingTicket.js";
export declare class ExitGate {
    private parkingLot;
    constructor(parkingLot: ParkingLot);
    exit(ticket: ParkingTicket): number;
}
//# sourceMappingURL=ExitGate.d.ts.map