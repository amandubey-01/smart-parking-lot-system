import { ParkingFloor } from "./ParkingFloor.js";
import { Vehicle } from "../vehicle/Vehicle.js";
import { ParkingTicket } from "../ticket/ParkingTicket.js";
export class ParkingLot {
    floors;
    strategy;
    feeCalculator;
    constructor(floors, strategy, feeCalculator) {
        this.floors = floors;
        this.strategy = strategy;
        this.feeCalculator = feeCalculator;
    }
    park(vehicle) {
        const spot = this.strategy.findSpot(vehicle, this.floors);
        if (!spot)
            throw new Error("No spot available");
        spot.park(vehicle);
        return new ParkingTicket(vehicle, spot, new Date());
    }
    unpark(ticket) {
        ticket.exitTime = new Date();
        ticket.spot.unpark();
        const fee = this.feeCalculator.calculate(ticket);
        ticket.fee = fee;
        return fee;
    }
}
//# sourceMappingURL=ParkingLot.js.map