import { ParkingFloor } from "./ParkingFloor.js";
import { Vehicle } from "../vehicle/Vehicle.js";
import type { SpotAllocationStrategy } from "../../strategy/SpotAllocationStrategy.js";
import {ParkingTicket} from "../ticket/ParkingTicket.js";
import type { FeeCalculator } from "../pricing/FeeCalculator.js";

export class ParkingLot {
    constructor(
        private floors: ParkingFloor[],
        private strategy: SpotAllocationStrategy,
        private feeCalculator: FeeCalculator
    ){}

    park(vehicle: Vehicle) : ParkingTicket {
        const spot = this.strategy.findSpot(vehicle, this.floors);
        if (!spot) throw new Error("No spot available");

        spot.park(vehicle);
        return new ParkingTicket(vehicle, spot, new Date());
    }

    unpark(ticket: ParkingTicket): number {
        ticket.exitTime = new Date();
        ticket.spot.unpark();

        const fee = this.feeCalculator.calculate(ticket);
        ticket.fee = fee;

        return fee;
    }
}

