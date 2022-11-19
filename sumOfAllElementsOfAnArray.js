let arr = [1, 2, 3, 4];
let total = 0;
function sumOfAll(arr) {
  for (var i in arr) {
    total += arr[i];
  }
  return total;
}
console.log(sumOfAll([1,2,3,4]))
