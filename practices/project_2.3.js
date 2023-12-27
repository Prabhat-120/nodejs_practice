const fun1 = (a,b,c) => {
    const val=a*b*c;
    return val;
};                                  //expression with arrow function
console.log(fun1(7,7,7));


(()=>{
console.log("test");                //IIFE error fuction
})();


let counter=100;                    //recursion function
function loop(val){
    console.log(val);
    if(val<88){
        return
    }
    const temp=val-1;
    loop(temp);
}
loop(counter);



function loop1(val){                        //recursion
    console.log(val);
    if(val > 0){
        val=val-1;
        return loop1(val);  
    }
   return "end";
}
const looper=loop1(25);
console.log(looper)

