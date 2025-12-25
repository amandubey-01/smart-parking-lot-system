import  {SpotType} from "./SpotType.js";
import { Vehicle } from "../vehicle/Vehicle.js";
import type { publicDecrypt } from "node:crypto";

export class ParkingLot {
    private occupied = false;
    private vehicle: Vehicle | undefined;

    constructor (
        public readonly id: string,
        public readonly type: SpotType
    ){}

    isAvailable (): boolean {
        return !this.occupied;
    }

    park (vehicle: Vehicle): void {
        if(!this.isAvailable()){
            throw new Error("Spot already occupied");
        }
        this.vehicle = vehicle;
        this.occupied = true;
    }

    unpark () : void {
        this.vehicle = undefined;
        this.occupied = false;
    }
}
