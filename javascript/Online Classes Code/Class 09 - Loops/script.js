// var start = +prompt("Enter starting number", 5);
// var limit = +prompt("Enter ending number", 40);
// var iLapse = +prompt("Enter step number", 2);

// for(var i = start; i<=limit; i = i + iLapse)
// {
//     console.log(i);
// }


// var fruits = ['apple', 'banana', 'mango', 'pineapple', 'strawberry'];
// var numElements = fruits.length;
// var favFruit = prompt("Enter your fruit name", );
// var indexNum = fruits.indexOf(favFruit);

// if(indexNum > -1)
// {
//     console.log("found");
// }

// else
// {
//     console.log("not found");
// }

// 

var myName = "Muhammad Waseem Nisar";
var firstName = myName.slice(0,8);
var lastName = myName.slice(9, 15);
var middleName = myName.slice(16);
// console.log(firstName);
// console.log(lastName);
// console.log(middleName);
// console.log(myName.length);

// var str = "********";
// for(var i = 0; i<8; i++)
// {
//     document.write("<p> " + str + " </p>");
//     str = str.slice(0,str.length-1);
// }


// var stars = "!@#$%^&*";
// for(var i=1; i<8; i++)
// {
//     console.log(stars);
//     stars = stars.slice(i);
// }


// for(var i=0; i<=4; i++)
// {
//     for(var j=0; j<=i; j++)
//     {   
//       document.write("*");
//     }
//     document.write("</br>");
// }



// var networks = ["0321", "0341", "0300", "0310", "0333"];
// var number = "3154869";

// for(var i=0; i<networks.length; i++)
// {
//     document.write(networks[i] + number);
//     document.write("<br>");
// }


// for(var a=0; a<=5; a++)
// {
//     for(var b=1; b<a; b++)
//     {
//         document.write(b);
//     }
//     document.write("<br>");
// }


// for(var i=1; i<=8; i++)
// {

//     for(var j=0; j<i; j++)
//     {
//         document.write(i);
//     }
//     document.write("<br>");
// }


for(var i=1; i>=5; i++)
{
    for(var j=5; j>=1; j++)
    {
        document.write(j);
    }

    document.write("<br>");
}