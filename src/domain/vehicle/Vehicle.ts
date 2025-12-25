import { VehicleType } from "./VehicleType.js";

export class Vehicle{
    constructor (
        public readonly licenseNumber : string,
        public readonly type : VehicleType,
    ){}
}
