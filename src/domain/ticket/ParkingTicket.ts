import { Vehicle } from "../vehicle/Vehicle.js";
import { ParkingSpot } from "../parking/ParkingSpot.js";

export class ParkingTicket {
  constructor(
    public readonly vehicle: Vehicle,
    public readonly spot: ParkingSpot,
    public readonly entryTime: Date
  ) {}
}
