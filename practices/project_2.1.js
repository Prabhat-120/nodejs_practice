function myfun1(){
    console.log('hello')
}

function myfun2(massage,name,val){
    console.log('1.'+massage,name,val);  //first output for call function
    const val1='2.'+name+" "+massage     //second output for call function
    console.log(val1)
    return val1;
}

function myfun3(a,b,c){
    const val1=a*b/c;
    console.log("result.:"+val1);
    return val1;
}

function myfun4(a,b,c){
    const val1=a+b-c;
    return val1;
}  

myfun1();

myfun2("how are you","prabhat",100);
myfun2("hi","bikash",110);
const val1=myfun2("welcome","rudra",1000);  

const a1=myfun3(5,4,2);         // call the function through the variable and store function result
const a2=myfun3(8,3,6);
const a3=myfun3(5,3,15);
console.log(a1,a2,a3);       //print the result through variable

const a4=myfun4(5,4,2);         // call the function through the variable and store function result in the variable
const a5=myfun4(8,3,6);
const a6=myfun4(5,3,15);
console.log(a4,a5,a6)
