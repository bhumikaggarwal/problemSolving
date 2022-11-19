const num =83;
let isPrime = 1 ;
for (i = 2; i < num; i++) {
  if (num % i == 0) {
    isPrime = 0 ;
  } 
}
if(isPrime === true) {
    console.log("Number is prime") ;
} else {
    console.log("Number is not prime") ;
}
