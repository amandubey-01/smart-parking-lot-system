import { ParkingFloor } from "./ParkingFloor.js";
import { Vehicle } from "../vehicle/Vehicle.js";
import { SpotAllocationStrategy } from "../../strategy/SpotAllocationStrategy.js";
import {ParkingTicket} from "../ticket/ParkingTicket.js";

export class ParkingLot {
    constructor(
        private floors: ParkingFloor[],
        private strategy: SpotAllocationStrategy
    ){}

    park(vehicle: Vehicle) : ParkingTicket {
        const spot = this.strategy.findSpot(vehicle, this.floors);
        if (!spot) throw new Error("No spot available");

        spot.park(vehicle);
        return new ParkingTicket(vehicle, spot, new Date());
    }
}

