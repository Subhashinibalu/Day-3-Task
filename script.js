// 1st task to compare JSON Object

let obj1 = {name:"Person 1", age:5};
let obj2 = {age:5, name:"Person 1"};

let len1 = Object.keys(obj1).length;
let len2 = Object.keys(obj2).length;

var flag =0;

if(len1===len2){
    
for(var key in obj1){
     if(obj1[key] !== obj2[key]) {
         flag = flag-1;
     }
     else
     {
         flag = flag+1;
     }
    
}
    
}

if(flag === len1)
{
    console.log("The JSON objects are same (TASK 1)");
}
else{
    console.log("The JSON objects are not same (TASK 1)");
}



//  2nd task to display flags using the given api


var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all")
request.send();
request.onload = function(){
    var data = request.response;
    var result = JSON.parse(data)
    console.log("Below showing the output for task 2")

    for(var i=0;i<result.length;i++){
        console.log(result[i].flags.png)
    }
}



// 3rd task to print all the countries name,region,sub-region and population.

var request1 = new XMLHttpRequest();
request1.open("GET","https://restcountries.com/v3.1/all")
request1.send();
request1.onload = function(){
    var data1 = request1.response;
    var result1 = JSON.parse(data1)
    console.log("Below showing the output for task 3")

    for(var i=0;i<result1.length;i++){
        console.log("country name",result1[i].name.common)
        console.log("region",result1[i].region)
        console.log("sub-region",result1[i].region)
        console.log("population",result1[i].population)
    }
}