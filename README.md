# Smart Parking Lot – Low-Level Design (TypeScript)

## Overview
This project is a **console-based simulation** of a Smart Parking Lot backend system.  
It focuses on **low-level design (LLD)** principles and core business logic rather than UI or REST APIs.

The system manages:
- Vehicle entry and exit
- Parking spot allocation based on vehicle type
- Parking duration tracking
- Fee calculation
- Real-time availability updates

The project is intentionally implemented as an **in-memory simulation** to clearly demonstrate design decisions and object interactions.

---

## Design Goals
- Apply SOLID principles and clean architecture
- Use composition over inheritance
- Keep responsibilities clearly separated
- Make the system extensible (new pricing rules, allocation strategies, etc.)
- Model real-world parking behavior accurately

---

## High-Level Architecture

### Core Components
- **ParkingLot** – Central coordinator
- **ParkingFloor** – Manages spots on a floor
- **ParkingSpot** – Represents an individual spot
- **Vehicle** – Represents a vehicle entering the system
- **ParkingTicket** – Tracks parking session details
- **EntryGate / ExitGate** – Interaction points
- **SpotAllocationStrategy** – Strategy pattern for allocation logic
- **FeeCalculator** – Strategy pattern for pricing

---

## Parking Flow

1. Vehicle enters through `EntryGate`
2. `ParkingLot` requests a spot from `SpotAllocationStrategy`
3. `ParkingFloor` finds a compatible available spot
4. `ParkingSpot` updates its occupancy state
5. `ParkingTicket` is created with entry time
6. On exit:
   - Exit time is recorded
   - Fee is calculated
   - Spot is freed

---

## Functional Requirements Coverage

| Requirement | Status |
|-----------|--------|
| Spot allocation by vehicle size | ✅ |
| Entry & exit time tracking | ✅ |
| Parking fee calculation | ✅ |
| Real-time availability updates | ✅ |
| Multi-floor support | ✅ |
| Concurrency-safe design (LLD level) | ✅ |

---

## Design Patterns Used
- **Strategy Pattern** – Spot allocation & fee calculation
- **Dependency Injection** – ParkingLot dependencies
- **Domain-Driven Design (lightweight)** – Clear domain entities
- **Single Responsibility Principle** – Each class has one reason to change

---

## Proposed Database Schema (Conceptual)

```text
vehicles(id, license_number, type)
parking_floors(id, floor_number)
parking_spots(id, floor_id, type, occupied)
parking_tickets(id, vehicle_id, spot_id, entry_time, exit_time, fee)
```

This schema is **not implemented** but directly maps to the domain model.

---

## Running the Project

### Build
```bash
npx tsc
```

### Run
```bash
node dist/index.js
```

---

## Scope & Limitations
- No REST APIs (by design)
- No database persistence (in-memory simulation)
- No UI

These can be added without changing core domain logic.

---

## Learning Outcomes
- Practical application of LLD concepts
- Understanding real-world object relationships
- Clean separation between orchestration and business rules
- Experience with Node.js ESM + TypeScript

---

## Future Enhancements
- REST API layer (Express / Fastify)
- Persistent storage (SQL / NoSQL)
- Multiple allocation strategies
- Unit tests with a simplified runner
- UML diagrams and sequence diagrams

---

## Author
Aman Dubey
