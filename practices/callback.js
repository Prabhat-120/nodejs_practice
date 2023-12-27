function firsttfunction(name,callback){
    console.log("Hi"+" "+name);
    callback();
}
function secondfunction(){
    console.log("how are you");
}
firsttfunction("prabhat",secondfunction);