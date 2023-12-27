//1.truthy and falsy statement

if(true){                                     //we can write exachange value of true is 1
    console.log("this is if condition");
}else{
    console.log("this is else condition");
}

if(false){                                     //we can write exchange value of false is 0
    console.log("this is if condition");
}else{
    console.log("this is else condition");
}


if(false && true){
    console.log("hi");
}else{
    console.log("hello");
}


if(true && true){
    console.log("hi");
}else{
    console.log("hello");
}

//2.if else statement

let num = 83
let rem = num % 2;
console.log(rem);
if(rem){
    console.log(num + ": is odd number");
}else{
    console.log(num +": is even number");
}


//3.if else if statement


function getmassage(val){
    let massage;
    let checknum=10;
    if(val>checknum){
        massage= val + " is greater than "+ checknum;
    }
    else if(val == checknum){
       massage = "both are equal " + val;
    }
    else{
        massage= val+ " is less than " +checknum;
    }
    return massage;
}
let counter=3;
console.log(getmassage(counter));
counter+=8;
console.log(getmassage(counter));
counter-=1
console.log(getmassage(counter))
console.log(7*2+10-1+"1"+0)