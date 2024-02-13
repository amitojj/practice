//Intermediate-Hard: Custom Promise Control Flow

function fetchData(data){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data)
        }, 2000)
    })
};
function analyseData(arr){
    return new Promise((resolve, reject) => {
      if (arr.some((num) => num < 0)) {
        reject("Negative numbers not allowed");
      }

      const sum = arr.reduce((acc, num) => acc + num, 0);
      resolve({
        sum,
        avg: sum / arr.length,
      });
    });

}
async function processData(arr){
    try {
        const data = await fetchData(arr);
        const result = await analyseData(data);
        return result; 
    } catch (error) {
        return error
    } 
};
// processData([-1, 2, 3]).then((result) => console.log(result));
// processData([1, 2, 3]).then((result) => console.log(result));

// Advanced: Sequential vs. Concurrent Execution

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function fetchData(randomDelay,url){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Data from ${url} fetched in ${randomDelay} seconds`)
        }, randomDelay * 1000)
    })
}
async function fetchSequentially(urls) {
    for (const url of urls){
        await fetchData(randomNumber(1, 3), url).then((data) => console.log(data));
    }
    console.timeEnd("Sequential time taken");
}
async function fetchConcurrently(urls) {
  const promises = urls.map((url) => fetchData(randomNumber(1, 3), url));
  await Promise.all(promises).then((data) => console.log(data));
  console.timeEnd("Concurrent time taken");
}
const urls = [
  "https://mydummyurl1.com",
  "https://mydummyurl2.com",
  "https://mydummyurl3.com",
];
// console.time("Sequential time taken");
// fetchSequentially(urls)
console.time("Concurrent time taken");
fetchConcurrently(urls);
