const VehicleBrands = {
  BMW: 'bmw',
  BOEING: 'boeing',
  TESLA: 'tesla',
  AUDI: 'audi',
};

class Engine {
  #type;
  constructor(type) {
    this.type = type;
  }

  set type(value) {
    console.log('setter called...');
    if (!value) {
      console.log('Engine type must be defined');
      return;
    }
    this.#type = value;
  }

  get type() {
    console.log('getter called...');

    return this.#type;
  }

  start() {
    console.log(`Engine ${this.type} starts...`);
  }
}

class Person {
  #name;
  constructor(name) {
    this.name = name;
  }

  set name(value) {
    if (!value) {
      console.log("Name can't be empty");
      return;
    }
    this.#name = value;
  }

  get name() {
    return this.#name;
  }
}

class Driver extends Person {
  constructor(name) {
    super(name);
  }
  drive(vehicle) {
    console.log(`Vehicle ${vehicle.constructor.name} moves`);
    vehicle.move();
  }
}

class Mechanic extends Person {
  constructor(name) {
    super(name);
  }

  repair(vehicle) {
    console.log(`Repairing ${vehicle.brand} in two weeks`);
  }
}

class Vehicle {
  #brand;

  constructor(brand) {
    this.brand = brand;
  }

  set brand(value) {
    console.log(value);
    if (!(value in VehicleBrands)) {
      console.log('Unkown brand');
      return;
    }
    this.#brand = value;
  }

  get brand() {
    return this.#brand;
  }

  move() {
    console.log(`Vehicle ${this.brand} moves...`);
  }
  describe() {
    console.log(`This is ${this.brand} vehicle`);
  }
}

class Car extends Vehicle {
  #driver;
  #engine;
  constructor(brand, driver, type = 'diesel') {
    super(brand);
    this.driver = driver;
    this.#engine = new Engine(type);
  }

  set driver(value) {
    if (!(value instanceof Driver)) {
      console.log('Unknown driver');
      return;
    }
    this.#driver = value;
  }

  get driver() {
    return this.#driver;
  }

  get engine() {
    return this.#engine;
  }
}

const driver1 = new Driver('Bob');
const car1 = new Car('AUDI', driver1);

const mechanic = new Mechanic('Garik');

mechanic.repair(car1);
