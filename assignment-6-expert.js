class PromiseQueue {
  constructor() {
    this.queue = [];
    this.pending = false;
  }

  add(promiseFunction) {
    this.queue.push(promiseFunction);
    if (!this.pending) {
      this.process();
    }
  }
  async process() {
    this.pending = true;
    let i = 1;
    while (this.queue.length) {
      try {
        console.log(`Promise ${i} is pending!`);
        await this.queue.shift()();
        console.timeLog("Time elapsed");
        console.log(`Promise ${i} is resolved!`);

      } catch (error) {
        console.timeLog("Time elapsed");
        console.log(`Promise ${i} is rejected! with error ${error.message}`);
      }
      
      i++;
    }
    console.timeEnd("Time elapsed");    
    this.pending = false;
  }
}

const queue = new PromiseQueue();
console.time("Time elapsed")
queue.add(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("First promise delayed by 1 second");
      resolve();
    }, 1000);
  });
});

queue.add(() => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Second promise throws an error after 2 seconds");
      reject(new Error("Something went wrong!"));
    }, 2000);
  });
});

queue.add(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Third promise resolves immediately");
      resolve();
    }, 0);
  });
});