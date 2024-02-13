async function retryPromise(fn, retriesLeft = 5, interval = 1000) {
  try {
    const result = await fn();
    console.log(
      `Promise resolved with: ${result} and ${retriesLeft} retries were left: `
    );
  } catch (error) {
    if (retriesLeft > 0) {
      console.log(
        `Error Encountered : ${error.message}. \n Retries left: ${retriesLeft} .  Retrying in ${
          interval / 1000
        } seconds...`
      );
      setTimeout(() => {
        retryPromise(fn, retriesLeft - 1, interval);
      }, interval);
    } else{
       console.log(
        `All retries have failed and promise is rejected with Error: ${error.message} `
      );
    }
  }
}

const fn = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.8 ? resolve("Success") : reject(new Error("rejected!"));
    }, 1000);
  });
};
retryPromise(fn);
