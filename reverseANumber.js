let number = 1234;
let reverse = 0;
while (number != 0) {
  reverse = (reverse * 10) + (number % 10);
  number = parseInt(number / 10);
}
console.log(reverse);