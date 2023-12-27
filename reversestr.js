// 1>use in-built function

/*

function reversestring(str){
    var splitstring=str.split("");
    var reverseArray=splitstring.reverse();
    var joinArray=reverseArray.join("");
    return joinArray;

}
console.log(reversestring("hello world"));

*/

//2. using decrementing for-loop

/*
function reversestring(str)
{
    var newString="";
    for(var i=str.length - 1; i>=0 ;i--)
    {
        newString += str[i];
    }
        return newString;   
}
console.log(reversestring("hello world"));

*/

//3. using recursion 

function reversestring(str){
    if (str==="")
        return "";
    else
        return reversestring(str.substr(1))+str.charAt(0)
}
console.log(reversestring("hello"));

