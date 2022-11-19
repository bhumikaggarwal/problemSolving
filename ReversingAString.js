// parseInt is used to convert a string to a numeric value
/* prompt is same like as alert dialogue box which is used to take input from the user 
which can either be a string r a numeric value accordingly. */

let string = 'JavaScript' ;
let stringLength = string.length ;
let reverseString = '' ;
for(let i = stringLength-1 ; i >= 0 ; i--){
    reverseString = reverseString + string[i] ;
} 
console.log(reverseString);


