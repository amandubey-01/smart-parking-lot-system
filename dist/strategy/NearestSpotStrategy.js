import { Vehicle } from "../domain/vehicle/Vehicle.js";
import { ParkingFloor } from "../domain/parking/ParkingFloor.js";
import { ParkingSpot } from "../domain/parking/ParkingSpot.js";
export class NearestSpotStrategy {
    findSpot(vehicle, floors) {
        for (const floor of floors) {
            const spot = floor.findAvailableSpot(vehicle);
            if (spot) {
                return spot;
            }
        }
        return null;
    }
}
//# sourceMappingURL=NearestSpotStrategy.js.map