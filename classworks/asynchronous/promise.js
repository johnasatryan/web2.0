class MyPromise {
  constructor(executor) {
    this.state = 'pending'; // current default state
    this.value = undefined; // catch resolve value
    this.reason = undefined; // catch reject value

    this.onfulfilledCallbacks = [];
    this.onrejectedCallbacks = [];
    this.rejectedFlag = false;

    const resolve = (value) => {
      if (this.state !== 'pending') return;
      this.state = 'fulfilled';
      this.value = value;

      queueMicrotask(() => {
        this.onfulfilledCallbacks.forEach((cb) => {
          cb(this.value);
        });
      });
    };

    const reject = (reason) => {
      if (this.state !== 'pending') return;

      console.log(this.onrejectedCallbacks);
      this.state = 'rejected';
      this.reason = reason;

      if (this.onrejectedCallbacks.length > 0) {
        this.onrejectedCallbacks.forEach((cb) => {
          queueMicrotask(() => {
            cb(this.reason);
          });
        });
      } else {
        this.rejectedFlag = true;
        queueMicrotask(() => {
          console.log(this.rejectedFlag);
          if (this.rejectedFlag) {
            console.error('UnhandledPromiseRejection', this.reason);
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
    return new MyPromise((resolve, reject) => {
      const handlerFulfilled = (value) => {
        try {
          if (typeof onFulfilled !== 'function') {
            resolve(value); // mi kentronaceq
          }
          queueMicrotask(() => {
            const result = onFulfilled(this.value);
            resolve(result);
          });
        } catch (err) {
          onRejected(err);
        }
      };
      const handlerRejected = (reason) => {
        this.rejectedFlag = false;
        try {
          if (typeof onRejected !== 'function') {
            reject(reason); // mi kentronaceq
          }
          queueMicrotask(() => {
            const result = onRejected(this.reason);
            resolve(result);
          });
        } catch (err) {
          reject(err);
        }
      };

      if (this.state === 'fulfilled') {
        queueMicrotask(() => {
          handlerFulfilled(this.value);
        });
      } else if (this.state === 'rejected') {
        queueMicrotask(() => {
          handlerRejected(this.reason);
        });
      } else {
        this.onfulfilledCallbacks.push(onFulfilled);
        this.onrejectedCallbacks.push(onRejected);
      }
    });
  }
  catch(onRejected) {
    return this.then(null, onRejected);
  }
}

// const p = new MyPromise((resolve) => {
//   resolve('some_value');
// });

// const r = p
//   .then((value) => {
//     console.log(value);
//     return 23;
//   })
//   .then((value) => {
//     console.log(value);
//   })
//   .then();

// console.log(r);

const p2 = new MyPromise((resolve, reject) => {
  reject('hello');
});

p2.catch((value) => {
  console.log(value);
});
