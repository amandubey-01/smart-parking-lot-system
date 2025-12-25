import { Vehicle } from "../vehicle/Vehicle.js";
import { ParkingSpot } from "../parking/ParkingSpot.js";
export declare class ParkingTicket {
    readonly vehicle: Vehicle;
    readonly spot: ParkingSpot;
    readonly entryTime: Date;
    exitTime?: Date;
    fee?: number;
    constructor(vehicle: Vehicle, spot: ParkingSpot, entryTime: Date);
}
//# sourceMappingURL=ParkingTicket.d.ts.map