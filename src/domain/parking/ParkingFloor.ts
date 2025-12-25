import { ParkingSpot } from "./ParkingSpot.js";
import { Vehicle} from "../vehicle/Vehicle.js";
import { SpotType } from "./SpotType.js";
import { VehicleType } from "../vehicle/VehicleType.js";

export class ParkingFloor {
    constructor (
        public readonly floorNumber: number,
        private spots : ParkingSpot[]
    ){
        this.spots.forEach(spot =>
            spot.assignFloor(this.floorNumber)
        );
    }

    findAvailableSpot(vehicle: Vehicle) : ParkingSpot | undefined{
        return (
            this.spots.find(
                spot  => 
                    spot.isAvailable() && 
                    this.canFit(vehicle.type, spot.type)
            )
        );
    }

    private canFit(vehicle: VehicleType, spot: SpotType): boolean {
        if (vehicle === VehicleType.MOTORCYCLE) return true;
        if (vehicle === VehicleType.CAR) return spot !== SpotType.SMALL;
        if (vehicle === VehicleType.BUS) return spot === SpotType.LARGE;
        return false;
    }

}
