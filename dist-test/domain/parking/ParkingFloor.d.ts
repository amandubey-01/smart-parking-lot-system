import { ParkingSpot } from "./ParkingSpot.js";
import { Vehicle } from "../vehicle/Vehicle.js";
export declare class ParkingFloor {
    readonly floorNumber: number;
    private spots;
    constructor(floorNumber: number, spots: ParkingSpot[]);
    findAvailableSpot(vehicle: Vehicle): ParkingSpot | undefined;
    private canFit;
}
//# sourceMappingURL=ParkingFloor.d.ts.map