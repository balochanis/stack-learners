// var startNum = +prompt("Enter starting number", 0);
// var endNum = +prompt("Enter end number", 100);
// var stepNum = +prompt("Enter step number", 5);

// for(var i=startNum; i<=endNum; i = i + stepNum)
// {
//     // console.log(i);
// }


var cities = ["karachi", "islamabad", "quetta", "lahore", "kashmir", "germany"];
var numElements = cities.length;

var cityNum = cities.indexOf("lahore");
// console.log(cityNum);
if(cityNum > -1)
{
    console.log(cities[cityNum] + " found in list and deleted");
    cities.splice(cityNum,1);
    console.log(cities);
}

