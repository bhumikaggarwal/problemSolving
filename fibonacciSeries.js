const num = 100 ;
let x = 0 ;
let y = 1 ;
let fn;
fn = x + y ;
console.log(x) ;
console.log(y) ;
while(fn < num){
    x = y ;
    y = fn ;
    fn = x + y ;
    console.log(fn) ;
}
