class MyPromiseComplete {
  constructor(executor) {
    this.state = 'pending';
    this.value = undefined;
    this.reason = undefined;
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];
    this.hasUnhandledRejection = false;

    const resolve = (value) => {
      if (this.state !== 'pending') return;
      this.state = 'fulfilled';
      this.value = value;

      this.onFulfilledCallbacks.forEach((callback) => {
        queueMicrotask(() => callback(this.value));
      });
    };

    const reject = (reason) => {
      if (this.state !== 'pending') return;
      this.state = 'rejected';
      this.reason = reason;

      if (this.onRejectedCallbacks.length > 0) {
        this.onRejectedCallbacks.forEach((callback) => {
          queueMicrotask(() => callback(this.reason));
        });
      } else {
        // Schedule unhandled rejection detection
        this.hasUnhandledRejection = true;
        queueMicrotask(() => {
          if (this.hasUnhandledRejection) {
            console.error('Unhandled Promise Rejection:', this.reason);
          }
        });
      }
    };

    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }

  then(onFulfilled, onRejected) {
    // Always return a NEW promise for chaining
    return new MyPromiseComplete((resolve, reject) => {
      const handleFulfilled = (value) => {
        try {
          if (typeof onFulfilled === 'function') {
            const result = onFulfilled(value);
            resolve(result);
          } else {
            resolve(value); // Pass through if no handler
          }
        } catch (error) {
          reject(error);
        }
      };

      const handleRejected = (reason) => {
        this.hasUnhandledRejection = false; // We have a handler now
        try {
          if (typeof onRejected === 'function') {
            const result = onRejected(reason);
            resolve(result); // Note: resolve, not reject!
          } else {
            reject(reason); // Pass through if no handler
          }
        } catch (error) {
          reject(error);
        }
      };

      if (this.state === 'fulfilled') {
        queueMicrotask(() => handleFulfilled(this.value));
      } else if (this.state === 'rejected') {
        queueMicrotask(() => handleRejected(this.reason));
      } else {
        // Still pending
        this.onFulfilledCallbacks.push(handleFulfilled);
        this.onRejectedCallbacks.push(handleRejected);
      }
    });
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }

  finally(onFinally) {
    return this.then(
      (value) => {
        if (typeof onFinally === 'function') onFinally();
        return value;
      },
      (reason) => {
        if (typeof onFinally === 'function') onFinally();
        throw reason;
      },
    );
  }
}

console.log('\n=== Testing Complete Version ===');

// Test chaining
new MyPromiseComplete((resolve, reject) => {
  resolve(10);
})
  .then((value) => {
    console.log('Chain step 1:', value);
    return value * 2;
  })
  .then((value) => {
    console.log('Chain step 2:', value);
    return value + 5;
  })
  .then((value) => {
    console.log('Chain step 3:', value);
  });

// Test error handling in chain
new MyPromiseComplete((resolve, reject) => {
  reject('Initial error');
})
  .catch((error) => {
    console.log('Caught in chain:', error);
    return 'recovered';
  })
  .then((value) => {
    console.log('After recovery:', value);
  });

setTimeout(() => {
  console.log('\n=== Creating unhandled rejection ===');
  new MyPromiseComplete((resolve, reject) => {
    reject('This will be unhandled');
  });
}, 100);

console.log('\n=== Your Original Code Fixed ===');

const p1 = new MyPromiseComplete(function executor(resolve, reject) {
  if (5 < 0) {
    resolve('Everything is ok');
  } else {
    reject('type must be string');
  }
});

