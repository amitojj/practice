async function fetchMultipleResources(urls) {
  const promises = urls.map((url) => fetchData(url));
  const output = {
    successes: [],
    errors: [],
  }
  const results = await Promise.allSettled(promises);
  results.forEach((result) => {
    if (result.status === "fulfilled") {
      output.successes.push(result.value);
    } else {
      output.errors.push(result.reason);
    }
  })
  return output;
}
function randonNumber(min, Max) {
  return Math.floor(Math.random() * (Max - min + 1)) + min;
}
function fetchData(url) {
  const delay = randonNumber(1, 5);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (delay < 4) {
        resolve(`Data fetched from ${url} in ${delay} seconds`);
      } else {
        reject(`Data fetching failed from ${url} after ${delay} seconds`);
      }
    }, delay * 1000);
  });
}
const urls = ["url1.com/", "url2.com/", "url3.com/", "url4.com/", "url4.com/"];
console.time("Time elapsed");
fetchMultipleResources(urls).then((data) => {
    
    console.log(data)
    console.timeEnd("Time elapsed");
})