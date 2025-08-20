const person = {
  name: 'James',
  age: 23,
};

const personProxy = new Proxy(person, {
  get(target, property) {
    return target[property];
  },

  set(target, property, value) {
    target[property] = value;
  },
});

console.log(personProxy.name);

personProxy.x = 23;
console.log(personProxy);
