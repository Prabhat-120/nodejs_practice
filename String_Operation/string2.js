//2.take a string and reverse to this string.

/*
function reversedstr(str)
{
    return str.split("").reverse().join("");

}
console.log(reversedstr("hello world"))

*/

//logic

function revesestring(str){
    
        var reversestr="";
        for(var i=str.length-1; i>=0; i--)
        {
            reversestr += str[i];
        }
        return reversestr;
    
}
console.log(revesestring("hello world"))



