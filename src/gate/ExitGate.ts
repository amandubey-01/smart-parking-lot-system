import { ParkingLot } from "../domain/parking/ParkingLot.js";
import { ParkingTicket } from "../domain/ticket/ParkingTicket.js";

export class ExitGate {
  constructor(private parkingLot: ParkingLot) {}

  exit(ticket: ParkingTicket): number {
    return this.parkingLot.unpark(ticket);
  }
}
