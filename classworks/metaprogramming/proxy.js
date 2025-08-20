const programming = {
  language: 'JS',
  author: 'Brendan Eich',
  year: new Date(1995, 11),
  [Symbol('some')]: 'it is unqiue',
};

// Object.defineProperty(programming, 'standard', {
//   get() {
//     return this._standard;
//   },

//   set(value) {
//     this._standard = value;
//   },
// });

// programming.standard = 'es5';

// console.log(programming.standard);

console.log(Object.getOwnPropertySymbols(programming));
const proxyProgramming = new Proxy(programming, {
  get(target, property, receiver) {
    console.log('Getter called...');

    return target[property];
  },

  set(target, property, value) {
    console.log('Setter called...');
    // if (property === 'basedOn') {
    //   throw new Error('Yaaaaa');
    // }
    target[property] = value;
  },
  has(target, property) {
    if (!target[property]) {
      return false;
    }
    return true;
  },
});

proxyProgramming.basedOn = 'C/C++';

console.log(proxyProgramming);

console.log('chlp' in proxyProgramming);
