// // // abstract classes vs intances
// // //

// // class CloudProvider {
// //   constructor() {
// //     if (new.target === CloudProvider) {
// //       throw new Error("Abstract class can't be instantiated...");
// //     }
// //   }
// //   storeFile(name) {
// //     throw new Error("Abstract method can't have implementation...");
// //   }
// //   getFile(name) {
// //     throw new Error("Abstract method can't have implementation...");
// //   }

// //   createServer(region) {
// //     throw new Error("Abstract method can't have implementation...");
// //   }

// //   listServers(region) {
// //     throw new Error("Abstract method can't have implementation...");
// //   }

// //   getCDNAddress() {
// //     throw new Error("Abstract method can't have implementation...");
// //   }
// // }

// // class Amazon extends CloudProvider {
// //   constructor() {
// //     super();
// //   }

// //   createServer(region) {

// //   }
// // }

// // let b = new Amazon();

// class Base {
//   constructor() {
//     console.log('hello world');
//   }
//   foo() {}
// }

// function mixin(Base) {
//   return class extends Base {
//     constructor() {
//       super();
//       console.log('hello Mlass');
//     }
//   };
// }

// class Mlass extends mixin(Base) {
//   constructor() {
//     super();
//   }
// }

// let m = new Mlass();

class StorageProvider {
  constructor() {
    if (new.target === StorageProvider) {
      throw new Error("Abstract class can't be instantiated...");
    }
  }
  storeFile(name) {
    throw new Error("Abstract method can't have implementation...");
  }
  getFile(name) {
    throw new Error("Abstract method can't have implementation...");
  }
  foo() {
    console.log('StorageProvider::foo');
  }
}

class CDNProvider {
  constructor() {
    if (new.target === CDNProvider) {
      throw new Error("Abstract class can't be instantiated...");
    }
  }
  getCDNAddress() {
    throw new Error("Abstract method can't have implementation...");
  }
  foo() {
    console.log('CDNProvider::foo');
  }
}

function CP() {
  return class extends CDNProvider {
    constructor() {
      super();
    }
  };
}

function MP() {
  return class extends StorageProvider {
    constructor() {
      super();
    }
  };
}

class Amazon extends MP(CP()) {}

let am = new Amazon();

am.foo();
