import { Vehicle } from "../domain/vehicle/Vehicle.js";
import { ParkingFloor } from "../domain/parking/ParkingFloor.js";
import { ParkingSpot } from "../domain/parking/ParkingSpot.js";
export interface SpotAllocationStrategy {
    findSpot(
        vehicle: Vehicle,
        floors : ParkingFloor[],
    ): ParkingSpot | null;
}
