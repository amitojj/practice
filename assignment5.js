function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function makeTea(randomDelay) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Tea is ready!");
      console.log(`Tea is ready! in ${randomDelay} seconds`);
    }, randomDelay * 1000);
  });
}

function makeToast(randomDelay) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Toast is ready!");
      console.log(`Toast is ready! in ${randomDelay} seconds`);
    }, randomDelay * 1000);
  });
}
function makeEggs(randomDelay) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("Eggs are ready!");
      console.log(`Eggs are ready! in ${randomDelay} seconds`);
    }, randomDelay * 1000);
  });
}

function prepareBreakfast() {
  makeTea(2)
    .then((res) => {
      console.log(res);
      return makeToast(3);
    })
    .then((res) => {
      console.log(res);
    })
    .then(() => console.log("Breakfast is ready!"))
    .catch((err) => console.log(err));
}
async function prepareFullBreakfast() {
  try {
    await Promise.all([
      makeTea(randomNumber(1, 5)),
      makeToast(randomNumber(1, 5)),
      makeEggs(randomNumber(1, 5)),
    ]).then(() => console.log("Breakfast is ready!"));
  } catch (error) {
    console.log(error);
  }
}
prepareFullBreakfast();
