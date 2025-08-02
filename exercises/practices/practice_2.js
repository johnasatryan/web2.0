// // class Shape {
// //   constructor() {
// //     if (new.target === Shape) {
// //       throw new Error('Cannot instantiate abstract class');
// //     }
// //   }
// //   getArea() {
// //     throw new Error("Cannot use abstract method 'getArea()'");
// //   }
// // }

// // class Cube extends Shape {
// //   constructor(width) {
// //     super();
// //     this.width = width;
// //     // this.height = height;
// //   }
// //   getArea() {
// //     return this.width * this.height;
// //   }
// // }

// // class Cube extends Rectangle {

// // }

// // // class Person {
// // //   constructor(name) {
// // //     this.name = name;
// // //   }
// // // }

// // // class Student extends Person {
// // //   constructor(name, avg_score) {

// // //   }
// // // }

// class StorageProvider {
//   constructor() {
//     if (
//       typeof this.upload !== 'function' ||
//       typeof this.download !== 'function'
//     ) {
//       throw new Error('Must implement upload and download methods');
//     }
//   }
// }

// class LocalStorageProvider extends StorageProvider {
//   upload(file) {
//     console.log(`Uploading ${file} to local storage.`);
//   }
//   download(filename) {
//     console.log(`Downloading ${filename} from local storage.`);
//   }
// }

// class CloudStorageProvider extends StorageProvider {
//   upload(file) {
//     console.log(`Uploading ${file} to the cloud.`);
//   }
//   download(filename) {
//     console.log(`Downloading ${filename} from the cloud.`);
//   }
// }

// // function useStorage(provider : StorageProvider) {
// //   if (
// //     typeof provider.upload !== 'function' ||
// //     typeof provider.download !== 'function'
// //   ) {
// //     throw new Error('Invalid storage provider');
// //   }

// //   provider.upload('file.txt');
// //   provider.download('file.txt');
// // }

// // // useStorage(new LocalStorageProvider());

// // let s = new StorageProvider();

// // class Base {
// //   constructor() {
// //     console.log(new.target);
// //     this.name = 'Bob';
// //     console.log('hello world');
// //   }
// // }

// // class Derived extends Base {
// //   // constructor() {
// //   //   console.log('derived');
// //   // }
// // }

// // // let b = new Base();
// // let d = new Derived();

// // console.log(d.name);

// // class Animal {
// //   constructor() {
// //     if (new.target === Animal) throw new Error('abstract class');
// //   }

// //   speak() {
// //     if (this.constructor.name === 'Animal') {
// //       throw new Error('abstract method');
// //     }
// //     console.log('Animal speaks');
// //   }
// // }

// // class Dog extends Animal {
// //   speak() {
// //     super.speak();
// //     console.log('Dog barks...');
// //   }
// // }

// // let d = new Dog();
// // d.speak();

// // class Vehicle {
// //   constructor(model) {
// //     if (new.target === Vehicle) {
// //       throw new Error('Abstract');
// //     }
// //     this.model = model;
// //   }

// //   getMaxSpeed() {
// //     if (this.constructor === Vehicle) throw new Error('Abstract Method');
// //     // Default behavior in abstract method
// //     return '180km/h';
// //   }
// // }

// // class Car extends Vehicle {
// //   getMaxSpeed() {
// //     return super.getMaxSpeed();
// //   }
// // }

// // class Ship extends Vehicle {
// //   getMaxSpeed() {
// //     return '400km/h';
// //   }
// // }

// // class Plane extends Vehicle {
// //   getMaxSpeed() {
// //     return '900km/h';
// //   }
// // }

// // class Truck extends Vehicle {
// //   getMaxSpeed() {
// //     return super.getMaxSpeed();
// //   }
// // }

// // class Moto extends Vehicle {
// //   getMaxSpeed() {
// //     return super.getMaxSpeed();
// //   }
// // }

// // const p = new Moto();
// // const ve = new Vehicle();

// // console.log(p.getMaxSpeed());
// // console.log(ve.getMaxSpeed());
// // Abstract Product Class

// class Product {
//   constructor(name, price, description) {
//     if (new.target === Product) {
//       throw new Error('Cannot instantiate abstract class Product directly');
//     }
//     this.name = name;
//     this.price = price;
//     this.description = description;
//     // this.reviews = [];
//   }

//   getDetails() {
//     throw new Error("Method 'getDetails()' must be implemented");
//   }
// }

// class ElectronicsProduct extends Product {
//   constructor(name, price, description, brand, warrantyPeriod) {
//     super(name, price, description);
//     this.brand = brand;
//     this.warrantyPeriod = warrantyPeriod;
//   }

//   getDetails() {
//     return `📱 ${this.name} by ${this.brand}, ${this.description}, Warranty: ${this.warrantyPeriod} months`;
//   }
// }

// class ClothingProduct extends Product {
//   constructor(name, price, description, size, material, gender) {
//     super(name, price, description);
//     this.size = size;
//     this.material = material;
//     this.gender = gender;
//   }

//   getDetails() {
//     return `👕 ${this.name} (${this.gender}, ${this.size}) - ${this.material}, ${this.description}`;
//   }
// }
