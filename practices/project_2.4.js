//closure function allow access to an outer function scope from an inner function scope.

function maker(val1){
    return function(val2){                      //this is normal function
    //return (val2) =>{                         //this is arrow function
        console.log(val1,val2);
        return val1+val2;
    }
}
let fun1=maker(5);
let fun2=maker(25);

console.log(fun1(4));
console.log(fun1(10));
console.log(fun2(75));