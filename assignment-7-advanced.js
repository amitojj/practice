function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function taskA() {
  return new Promise((resolve, reject) => {
    console.log("taskA Started");
    const delay = randomNumber(1, 5) * 1000;
    setTimeout(() => {
      resolve("taskA resolved");
      console.log("taskA Completed in " + delay / 1000 + " seconds");
    }, delay);
  });
}

function taskB() {
  return new Promise((resolve, reject) => {
    console.log("taskB Started");
    const delay = randomNumber(1, 5) * 1000;
    setTimeout(() => {
      resolve("taskB resolved");
      console.log("taskB Completed in " + delay / 1000 + " seconds");
    }, delay);
  });
}

function taskC() {
  return new Promise((resolve, reject) => {
    console.log("taskC Started");
    const delay = randomNumber(1, 5) * 1000;
    setTimeout(() => {
      resolve("taskC resolved");
      console.log("taskC Completed in " + delay / 1000 + " seconds");
    }, delay);
  });
}
function taskD() {
  return new Promise((resolve, reject) => {
    console.log("taskD Started");
    const delay = randomNumber(1, 5) * 1000;
    setTimeout(() => {
      resolve("taskD resolved");
      console.log("taskD Completed in " + delay / 1000 + " seconds");
    }, delay);
  });
}
(async function dependancyResolution() {
    const resC= taskC();
    await taskA();
    const resB =  taskB();
    await Promise.all([resC, resB])
    taskD();

})();
