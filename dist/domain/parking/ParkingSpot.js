import { SpotType } from "./SpotType.js";
import { Vehicle } from "../vehicle/Vehicle.js";
export class ParkingSpot {
    id;
    type;
    occupied = false;
    vehicle;
    constructor(id, type) {
        this.id = id;
        this.type = type;
    }
    isAvailable() {
        return !this.occupied;
    }
    park(vehicle) {
        if (!this.isAvailable()) {
            throw new Error("Spot already occupied");
        }
        this.vehicle = vehicle;
        this.occupied = true;
    }
    unpark() {
        this.vehicle = undefined;
        this.occupied = false;
    }
}
//# sourceMappingURL=ParkingSpot.js.map