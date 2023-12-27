//2.How do you reverse a given string in place.

function reversestr(str){
    const strarray=str.split("");

    let left=0;
    let right=strarray.length-1;

    while(left<right){
        const temp=strarray[left];
        strarray[left]=strarray[right];
        strarray[right]=temp;

        left++;
        right--;
    }
    changestr=strarray.join('');
    return changestr;
}
console.log(reversestr("hello world"));