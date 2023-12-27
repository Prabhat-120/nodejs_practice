function fibonacciseries(n){
    var fib=[1,1];
    for(let i=2;i<=n;i++){
        nextfib=fib[i-1]+fib[i-2];
        fib.push(nextfib);
    }
    return fib;
    
}
console.log(fibonacciseries(15))


