import { Vehicle } from "../domain/vehicle/Vehicle.js";
import { ParkingFloor } from "../domain/parking/ParkingFloor.js";
import { ParkingSpot } from "../domain/parking/ParkingSpot.js";
import type { SpotAllocationStrategy } from "./SpotAllocationStrategy.js";

export class NearestSpotStrategy implements SpotAllocationStrategy {
  findSpot(
    vehicle: Vehicle,
    floors: ParkingFloor[]
  ): ParkingSpot | null {
    for (const floor of floors) {
      const spot = floor.findAvailableSpot(vehicle);
      if (spot) {
        return spot;
      }
    }
    return null;
  }
}
