// Define the customMap function
function customMap(arr, cb) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(cb(arr[i], i, arr));
  }
  return result;
}
const numbers = [1, 2, 3, 4, 5];

const squareOfNumbers = customMap(numbers, function (num) {
  return num * num;
});

console.log(squareOfNumbers);
const arrays = [3,4,6]
const result = arrays.filter(num => num%2===0)
console.log(result);