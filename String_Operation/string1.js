//1.take a cities word in a array and give a structure like 1st letter is capital and others are small

let cities=["surat","mumbai","bhubaneswar","nagapur"]                               //this is a array 
for(let i=0; i <cities.length;i++){
    let firstletter=cities[i].slice(0,1);
    let lowercase=cities[i].toLowerCase();
    let correctcities=lowercase.replace(firstletter,firstletter.toUpperCase());
    console.log(correctcities);
} 



var str="surat,bam,bhubaneswar"                           //this is string
var city=str.split(",");                                  //convert string into object
for(let i=0;i<city.length;i++){
    let cap=city[i].slice(0,1);
    let smal=city[i].toLowerCase();
    let filt=smal.replace(cap,cap.toUpperCase());
    console.log(filt);

}
