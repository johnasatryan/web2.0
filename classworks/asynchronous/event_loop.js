// 0. Execution Context and Stack Frames
// Each function call creates an execution context
const ExecutionContext = {
  // Variable Environment
  variableEnvironment: {
    environmentRecord: {}, // var declarations, function declarations
    outer: null, // Reference to outer environment
  },

  // Lexical Environment
  lexicalEnvironment: {
    environmentRecord: {}, // let, const, function parameters
    outer: null, // Reference to outer lexical environment
  },

  // This binding
  thisBinding: undefined,

  // Function reference
  codeEvaluationState: {
    // Current line being executed
    // Local variables
    // etc.
  },
};

// Stack Frame Lifecycle

function demonstrateStackFrames() {
  console.log('1'); // Frame: demonstrateStackFrames

  function inner() {
    console.log('2'); // Frame: inner (on top of demonstrateStackFrames)
    return 'done';
  } // inner frame is popped

  const result = inner(); // inner frame is pushed then popped
  console.log('3'); // Back to demonstrateStackFrames frame
} // demonstrateStackFrames frame is popped

// 1. Memory Structures in Detail

// The call stack is a LIFO (Last In, First Out) data structure
class CallStack {
  constructor() {
    this.frames = [];
    this.maxSize = 16000; // Approximate limit (varies by engine)
  }

  push(executionContext) {
    if (this.frames.length >= this.maxSize) {
      throw new Error('Maximum call stack size exceeded');
    }
    this.frames.push(executionContext);
  }

  pop() {
    return this.frames.pop();
  }

  top() {
    return this.frames[this.frames.length - 1];
  }

  isEmpty() {
    return this.frames.length === 0;
  }
}

// 2. The Event Loop Algorithm (Pseudo-code)

// This is a simplified version of what the event loop does internally
function eventLoop() {
  while (true) {
    // Phase 1: Execute all synchronous code on call stack
    while (callStack.length > 0) {
      const frame = callStack.top();
      executeFrame(frame);
    }

    // Phase 2: Process ALL microtasks (until queue is completely empty)
    while (microtaskQueue.length > 0) {
      const microtask = microtaskQueue.dequeue();
      callStack.push(microtask);
      executeFrame(microtask);

      // Important: New microtasks can be added during this phase
      // and they will be processed before moving to next phase
    }

    // Phase 3: Process ONE macrotask (if any)
    if (macrotaskQueue.length > 0) {
      const macrotask = macrotaskQueue.dequeue();
      callStack.push(macrotask);
      executeFrame(macrotask);
    }

    // Phase 4: Render updates (if needed and browser is ready)
    if (needsRendering && canRender()) {
      performRender();
    }

    // If no tasks remain, wait for new tasks
    if (isEmpty()) {
      waitForTasks();
    }
  }
}

// Task Queues

// Microtask Queue (Higher Priority)
class MicrotaskQueue {
  constructor() {
    this.tasks = [];
  }

  enqueue(task) {
    this.tasks.push(task);
  }

  dequeue() {
    return this.tasks.shift(); // FIFO
  }

  isEmpty() {
    return this.tasks.length === 0;
  }
}

// Macrotask/Callback Queue (Lower Priority)
class MacrotaskQueue {
  constructor() {
    this.tasks = [];
  }

  enqueue(task) {
    this.tasks.push(task);
  }

  dequeue() {
    return this.tasks.shift(); // FIFO
  }

  isEmpty() {
    return this.tasks.length === 0;
  }
}

// 3. How Web APIs Interface with the Event Loop

// How setTimeout actually works internally
// function setTimeout(callback, delay) {
//   const timerId = generateUniqueId();

//   // This runs in the Web API environment (separate thread)
//   WebAPI.Timer.create({
//     id: timerId,
//     callback: callback,
//     delay: delay,
//     onComplete: function () {
//       // When timer expires, callback is moved to macrotask queue
//       eventLoop.macrotaskQueue.enqueue(callback);
//     },
//   });

//   return timerId;
// }

// Promise Implementation (Conceptual)

// class Promise {
//   constructor(executor) {
//     this.state = 'pending';
//     this.value = undefined;
//     this.onFulfilledCallbacks = [];
//     this.onRejectedCallbacks = [];

//     const resolve = (value) => {
//       if (this.state === 'pending') {
//         this.state = 'fulfilled';
//         this.value = value;

//         // Schedule all .then() callbacks as microtasks
//         this.onFulfilledCallbacks.forEach((callback) => {
//           eventLoop.microtaskQueue.enqueue(() => callback(value));
//         });
//       }
//     };

//     const reject = (reason) => {
//       if (this.state === 'pending') {
//         this.state = 'rejected';
//         this.value = reason;

//         // Schedule all .catch() callbacks as microtasks
//         this.onRejectedCallbacks.forEach((callback) => {
//           eventLoop.microtaskQueue.enqueue(() => callback(reason));
//         });
//       }
//     };

//     executor(resolve, reject);
//   }

//   then(onFulfilled) {
//     return new Promise((resolve) => {
//       if (this.state === 'fulfilled') {
//         // Immediately schedule as microtask
//         eventLoop.microtaskQueue.enqueue(() => {
//           const result = onFulfilled(this.value);
//           resolve(result);
//         });
//       } else if (this.state === 'pending') {
//         // Store for later execution
//         this.onFulfilledCallbacks.push((value) => {
//           const result = onFulfilled(value);
//           resolve(result);
//         });
//       }
//     });
//   }
// }

//5. The Critical Event Loop Rules

// Rule 1: Synchronous Code Always Runs First

// console.log('1'); // Executes immediately
// setTimeout(() => console.log('2'), 0); // Queued as macrotask
// Promise.resolve().then(() => console.log('3')); // Queued as microtask
// console.log('4'); // Executes immediately

// // Call stack processes: console.log('1'), setTimeout call, Promise.resolve().then call, console.log('4')
// // Then microtasks: Promise callback
// // Then macrotasks: setTimeout callback

// // Rule 2: Microtasks Drain Completely Before Macrotasks
// setTimeout(() => console.log('macro'), 0);

// Promise.resolve().then(() => {
//   console.log('micro 1');
//   // This creates another microtask during microtask processing
//   Promise.resolve().then(() => console.log('micro 2'));
//   queueMicrotask(() => console.log('micro 3'));
// });

// // Output: micro 1, micro 2, micro 3, macro
// // All microtasks complete before any macrotask runs

// // Rule 3: Each Macrotask Gets Its Own Event Loop Tick
// setTimeout(() => {
//   console.log('macro 1');
//   Promise.resolve().then(() => console.log('micro in macro 1'));
// }, 0);

// setTimeout(() => {
//   console.log('macro 2');
//   Promise.resolve().then(() => console.log('micro in macro 2'));
// }, 0);

// Output: macro 1, micro in macro 1, macro 2, micro in macro 2
// Each macrotask processes its microtasks before next macrotask

module.exports = { MicrotaskQueue, MacrotaskQueue, CallStack };
