
// Prime Number
// var num = 39;
// var isPrime = true;

// for(var i=2; i <num; i++)
// {
//     var result = num % i;
//     if(result == 0)
//     {
//         console.log("not a prime number, number:" + num + ", divided by:  " +  i);
//         isPrime = false;
//         break;
//     }
// }

// if(isPrime)
// {
//     console.log("Prime Number: " + num);

// }




//2 Proper Case to Array items

var colors = ["white", "black", "purple", "blue", "orange", "brown", "green"];
var numElements = colors.length;
var properColors = [];
for( var i=0; i<numElements; i++)
{
    var firstChar = colors[i].slice(0,1);
    // break;
    var otherChars = colors[i].slice(1);
    firstChar = firstChar.toUpperCase();
    otherChars = otherChars.toLowerCase();
    var properText = firstChar + otherChars;
    properColors.push(properText);
    
}   

console.log(properColors);
var favColor = properColors[3];
console.log("My Favourite color is: " + favColor);
console.log(properColors.sort());


