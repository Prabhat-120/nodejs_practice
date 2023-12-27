//  1.natural number 

let row=4;
let string="";
let n=1;
for(let i=0;i<row;i++){
    
    for(let j=0;j<=i;j++){
        string += n + " ";
        n++;
    }
    string += "\n";
}
console.log(string)


// 2. fibonacci series

let rows=3;
let a=1;
let b=1;
for(let i=0;i<=rows;i++){
    let rowel="";
    for(let j=0;j<i;j++){
        rowel += a + " ";
        const temp=a+b;
        a=b;
        b=temp;
    }
    
    console.log(rowel);
}

let l=4;
let str="";
let x=2;
for(let i=0;i<row;i++){
    
    for(let j=0;j<=i;j++){
        string += n + " ";
        n++;
    }
    string += "\n";
}
console.log(string)




   
  
  