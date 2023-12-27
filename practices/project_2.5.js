/*
+=	    x += y	    x = x + y
=	    x = y	    x = y
-=	    x -= y	    x = x - y
*=	    x *= y	    x = x * y
/=	    x /= y	    x = x / y
%=	    x %= y	    x = x % y
**=     x **= y     x = x ** y
*/

let val=100;
val+=1000;           //val add to 1000.... then (output: val=1100
val++;               //val increment value by 1 (then output: val=1101
val-=100;            //val minus by 100 then (output: val=1001
val--;               //val value dcrement 1 then (output:val=1000
let val1=val;        //val1 assign value of val then (output:val1=1000)


console.log(val) 

console.log(val1);