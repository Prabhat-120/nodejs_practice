//callback function 

do_sum(5,4,function(result){
    console.log(result);
})
function do_sum(a,b,callback){
    let sum=0;
    sum=a+b;
    callback(sum);
}

//closure

function create(){
    let counter=0;

    return {
        increment:function(){
            counter++;
        },
        print:function(){
            console.log(counter);

        }
    }
}
let c=create();
c.increment();
c.increment()
c.print();