import { SpotType } from "./SpotType.js";
import { Vehicle } from "../vehicle/Vehicle.js";
export declare class ParkingSpot {
    readonly id: string;
    readonly type: SpotType;
    private occupied;
    private vehicle;
    private floorNumber?;
    constructor(id: string, type: SpotType);
    assignFloor(floorNumber: number): void;
    getLocation(): string;
    isAvailable(): boolean;
    park(vehicle: Vehicle): void;
    unpark(): void;
}
//# sourceMappingURL=ParkingSpot.d.ts.map