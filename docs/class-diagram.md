```mermaid
classDiagram

class ParkingLot {
  - floors: ParkingFloor[]
  - strategy: SpotAllocationStrategy
  - feeCalculator: FeeCalculator
  + park(vehicle)
  + unpark(ticket)
}

class ParkingFloor {
  - floorNumber: number
  - spots: ParkingSpot[]
  + findAvailableSpot(vehicle)
}

class ParkingSpot {
  - id: string
  - type: SpotType
  - occupied: boolean
  + park(vehicle)
  + unpark()
  + getLocation()
}

class Vehicle {
  - licenseNumber: string
  - type: VehicleType
}

class ParkingTicket {
  - entryTime: Date
  - exitTime: Date
  - fee: number
}

class EntryGate {
  + enter(vehicle)
}

class ExitGate {
  + exit(ticket)
}

class SpotAllocationStrategy {
  <<interface>>
  + findSpot(vehicle, floors)
}

class NearestSpotStrategy {
  + findSpot(vehicle, floors)
}

class FeeCalculator {
  <<interface>>
  + calculate(ticket)
}

class HourlyFeeCalculator {
  + calculate(ticket)
}

ParkingLot --> ParkingFloor
ParkingFloor --> ParkingSpot
ParkingLot --> SpotAllocationStrategy
SpotAllocationStrategy <|-- NearestSpotStrategy
ParkingLot --> FeeCalculator
FeeCalculator <|-- HourlyFeeCalculator
ParkingTicket --> Vehicle : vehicle
ParkingTicket --> ParkingSpot : spot
EntryGate --> ParkingLot
ExitGate --> ParkingLot
