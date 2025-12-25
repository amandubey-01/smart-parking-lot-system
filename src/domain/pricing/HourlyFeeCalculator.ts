import type { FeeCalculator } from "./FeeCalculator.js";
import { ParkingTicket } from "../ticket/ParkingTicket.js";
import { VehicleType } from "../vehicle/VehicleType.js";

export class HourlyFeeCalculator implements FeeCalculator {
  calculate(ticket: ParkingTicket): number {
    if (!ticket.exitTime) {
      throw new Error("Vehicle has not exited yet");
    }

    const durationMs =
      ticket.exitTime.getTime() - ticket.entryTime.getTime();

    const hours = Math.ceil(durationMs / (1000 * 60 * 60));

    switch (ticket.vehicle.type) {
      case VehicleType.MOTORCYCLE:
        return hours * 10;
      case VehicleType.CAR:
        return hours * 20;
      case VehicleType.BUS:
        return hours * 50;
    }
  }
}
