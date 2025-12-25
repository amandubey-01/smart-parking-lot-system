import { ParkingSpot } from "./ParkingSpot.js";
import { Vehicle } from "../vehicle/Vehicle.js";
import { SpotType } from "./SpotType.js";
import { VehicleType } from "../vehicle/VehicleType.js";
export class ParkingFloor {
    floorNumber;
    spots;
    constructor(floorNumber, spots) {
        this.floorNumber = floorNumber;
        this.spots = spots;
        this.spots.forEach(spot => spot.assignFloor(this.floorNumber));
    }
    findAvailableSpot(vehicle) {
        return (this.spots.find(spot => spot.isAvailable() &&
            this.canFit(vehicle.type, spot.type)));
    }
    canFit(vehicle, spot) {
        if (vehicle === VehicleType.MOTORCYCLE)
            return true;
        if (vehicle === VehicleType.CAR)
            return spot !== SpotType.SMALL;
        if (vehicle === VehicleType.BUS)
            return spot === SpotType.LARGE;
        return false;
    }
}
//# sourceMappingURL=ParkingFloor.js.map