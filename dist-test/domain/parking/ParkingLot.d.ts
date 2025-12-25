import { ParkingFloor } from "./ParkingFloor.js";
import { Vehicle } from "../vehicle/Vehicle.js";
import type { SpotAllocationStrategy } from "../../strategy/SpotAllocationStrategy.js";
import { ParkingTicket } from "../ticket/ParkingTicket.js";
import type { FeeCalculator } from "../pricing/FeeCalculator.js";
export declare class ParkingLot {
    private floors;
    private strategy;
    private feeCalculator;
    constructor(floors: ParkingFloor[], strategy: SpotAllocationStrategy, feeCalculator: FeeCalculator);
    park(vehicle: Vehicle): ParkingTicket;
    unpark(ticket: ParkingTicket): number;
}
//# sourceMappingURL=ParkingLot.d.ts.map