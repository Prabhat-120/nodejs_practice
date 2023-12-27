const fun1=function(a,b,c){              //Cannot access 'fun1' before initialization in this type of function expression   
    
    const val=a*b*c;                    //expression
    return val;                     
}    

const a=5;
const b=6;
const c=4;
(function(a,b,c){
    const val=a*b*c;
    console.log("result: "+val);
})(a,b,c);                                   //IIFE

const fun3 = (function(a,b,c){
    const val=a*b*c;
    return val;
})(a,b,c);
console.log("result of fun3 "+fun3);       //IIFE

const val1=fun1(5,6,2);
const val2=fun2(5,4,2);

console.log("result: "+val1);
console.log("result: "+val2);

function fun2(a,b,c){                   //access 'fun2' before initialization in this type of function expression
    const val=a*b*c;
    return val;
}