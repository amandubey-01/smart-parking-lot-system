"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParkingSpot = void 0;
const SpotType_js_1 = require("./SpotType.js");
const Vehicle_js_1 = require("../vehicle/Vehicle.js");
class ParkingSpot {
    id;
    type;
    occupied = false;
    vehicle;
    floorNumber;
    constructor(id, type) {
        this.id = id;
        this.type = type;
    }
    assignFloor(floorNumber) {
        this.floorNumber = floorNumber;
    }
    getLocation() {
        if (this.floorNumber === undefined) {
            throw new Error("Spot is not assigned to any floor");
        }
        return `Floor ${this.floorNumber}, Spot ${this.id}`;
    }
    isAvailable() {
        return !this.occupied;
    }
    park(vehicle) {
        if (!this.isAvailable()) {
            throw new Error("Spot already occupied");
        }
        this.vehicle = vehicle;
        this.occupied = true;
    }
    unpark() {
        this.vehicle = undefined;
        this.occupied = false;
    }
}
exports.ParkingSpot = ParkingSpot;
//# sourceMappingURL=ParkingSpot.js.map