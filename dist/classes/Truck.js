// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
// TODO: The Truck class should extend the Vehicle class and should implement the AbleToTow interface
class Truck extends Vehicle {
    // TODO: Create a constructor that accepts the properties of the Truck class
    constructor(vin, color, make, model, weight, year, topSpeed, wheels, towingCapacity
    // TODO: The constructor should call the constructor of the parent class, Vehicle
    // TODO: The constructor should initialize the properties of the Truck class
    // TODO: The constructor should check if the wheels array has 4 elements and create 4 new default Wheel objects if it does not
    ) {
        super();
        this.vin = vin;
        this.color = color;
        this.make = make;
        this.model = model;
        this.year = year;
        this.weight = weight;
        this.topSpeed = topSpeed;
        this.towingCapacity = towingCapacity;
    }
    // TODO: Implement the tow method from the AbleToTow interface
    tow(vehicle) {
        // TODO: Get the make an model of the vehicle if it exists
        const vehicleMake = vehicle.make;
        const vehicleModel = vehicle.model;
        // TODO: Check if the vehicle's weight is less than or equal to the truck's towing capacity
        if (vehicle.weight <= this.towingCapacity) {
            console.log(`Vehicle ${vehicleMake} ${vehicleModel} is being towed.`);
        }
        else {
            console.log(`Vehicle ${vehicleMake} ${vehicleModel} is too heavy to be towed.`);
        }
        // TODO: If it is, log that the vehicle is being towed
        // TODO: If it is not, log that the vehicle is too heavy to be towed
    }
    // TODO: Override the printDetails method from the Vehicle class
    printDetails() {
        super.printDetails();
        console.log(`VIN: ${this.vin}`);
        console.log(`Make: ${this.make}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
        console.log(`Weight: ${this.weight}`);
        console.log(`Top Speed: ${this.topSpeed}`);
        console.log(`Color: ${this.color}`);
        console.log(`Towing Capacity: ${this.towingCapacity}`);
        // TODO: The method should call the printDetails method of the parent class
        // TODO: The method should log the details of the Truck
        // TODO: The details should include the VIN, make, model, year, weight, top speed, color, towing capacity, and wheels
    }
}
// Export the Truck class as the default export
export default Truck;
