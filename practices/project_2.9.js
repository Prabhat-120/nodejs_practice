//1.ternary operator

let age=18;
let massage = (age>=18) ? "eligible" : "noteligible";
console.log(massage); 

//2. above ternary operator convert in if elese statment

function  checkage(){
let age = 16;
// let massage;
if (age > 18){
    massage="eligible";
}else{
    massage="not eligible";
}
return massage;
}
console.log(checkage());
