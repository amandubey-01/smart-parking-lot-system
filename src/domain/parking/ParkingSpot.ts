import  {SpotType} from "./SpotType.js";
import { Vehicle } from "../vehicle/Vehicle.js";
import type { publicDecrypt } from "node:crypto";

export class ParkingSpot {
    private occupied = false;
    private vehicle: Vehicle | undefined;
    private floorNumber?: number;

    constructor (
        public readonly id: string,
        public readonly type: SpotType,
    ){}

     assignFloor(floorNumber: number) {
        this.floorNumber = floorNumber;
    }

    getLocation(): string {
        if (this.floorNumber === undefined) {
            throw new Error("Spot is not assigned to any floor");
        }
        return `Floor ${this.floorNumber}, Spot ${this.id}`;
    }


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
