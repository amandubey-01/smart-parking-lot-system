import { Vehicle } from "../domain/vehicle/Vehicle.js";
import { ParkingFloor } from "../domain/parking/ParkingFloor.js";
import { ParkingSpot } from "../domain/parking/ParkingSpot.js";
import type { SpotAllocationStrategy } from "./SpotAllocationStrategy.js";
export declare class NearestSpotStrategy implements SpotAllocationStrategy {
    findSpot(vehicle: Vehicle, floors: ParkingFloor[]): ParkingSpot | null;
}
//# sourceMappingURL=NearestSpotStrategy.d.ts.map