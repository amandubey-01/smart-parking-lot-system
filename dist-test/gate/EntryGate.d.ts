import { ParkingLot } from "../domain/parking/ParkingLot.js";
import { Vehicle } from "../domain/vehicle/Vehicle.js";
import { ParkingTicket } from "../domain/ticket/ParkingTicket.js";
export declare class EntryGate {
    private parkingLot;
    constructor(parkingLot: ParkingLot);
    enter(vehicle: Vehicle): ParkingTicket;
}
//# sourceMappingURL=EntryGate.d.ts.map