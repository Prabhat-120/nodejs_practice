/*
function ispalindrome(str){
    const trial=str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    for(let i=0; i<str.length/2;i++){
        if(trial[i]!==trial[trial.length-1-i]){
            return false; 
        }
    }
    return true;
}
console.log(ispalindrome(121));
*/


// while loop

function ispalindrome(input){
    const str=String(input);

    let start=0;
    let end=str.length-1;

    while(start < end){
        if(str[start] !== str[end]){
            return false;
        }
        start++;
        end--;
    }
    return true;
}
console.log(ispalindrome(121));
console.log(ispalindrome("kac"));