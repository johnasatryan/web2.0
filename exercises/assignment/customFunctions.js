Function.prototype.myCall = function (context, ...args) {
  context = context || globalThis;

  let symb = Symbol('custom_fn');

  context[symb] = this;

  let res = context[symb](...args);

  delete context[symb];

  return res;
};

Function.prototype.myApply = function (context, args) {
  context = context || globalThis;

  let symb = Symbol('custom_fn');

  context[symb] = this;

  let res = null;

  if (Array.isArray(args) && args.length) {
    res = context[symb](args);
  } else {
    res = context[symb]();
  }

  delete context[symb];

  return res;
};

Function.prototype.myBind = function (context, ...args) {
  let customThis = this;
  return function (...laterArgs) {
    return customThis.myCall(context, ...args, ...laterArgs);
  };
};

function greet(msg) {
  console.log(msg, this.name);
}

// greet.myCall(person, 'hello');

const person = {
  name: 'Alice',
  greet: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

person.greet();

let unboundMethod = person.greet;

unboundMethod = person.greet.myBind(person);

unboundMethod();
