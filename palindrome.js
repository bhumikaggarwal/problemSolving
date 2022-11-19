// A string is palindrome if it is read same from forward and backward e.g. dad , madam.
// Also a string is a continuous array of characters.
let string = 'madam';
let stringLength = string.length ;
let msg = "String is a palindrome";
for(i = 0 ; i <= stringLength/2 ; i++){
    if((string[i]) != (string[stringLength-1-i]))
    msg = "String is not a palindrome";
}
console.log(`madam : ${msg}`)  /*${} to assign a variable instead of a value can only 
                                be used with back ticks */