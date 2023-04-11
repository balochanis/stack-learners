// var txt = "anisbaloch";
// var firstChar = txt.slice(2,5);
// // console.log(firstChar);

// var monthName = "November";
// if(monthName.length > 3)
// {
//     var charsInMonth = monthName.slice(0,3);
// }

// // console.log(charsInMonth);




// var str = "My name is Anis  ";
// for(var i=0; i <str.length; i++)
// {
//     if(str.slice(i, i+2) === "  ")
//     {
//         console.log("Double spaces found");
//         break;
//     }

//     else
//     {
//         console.log("No double spaces found");
//     }
// }

// var text = "I am anis i am a student of usman institute";

// var firstChar = text.indexOf("usman institute");
// if(firstChar !== -1)
// {
//     text = text.slice(0, firstChar) + "stack learners" + text.slice(firstChar + 15);
// }

// console.log(text);


var txt = "anis b!aloch";
var firstChar = txt.charAt(txt.length -1);
// console.log(firstChar);

// for(var i=0; i <txt.length; i++)
// {
//     if(txt.charAt(i) === "!")
//     {
//         alert("exclamation point is found");
//         break;
//     }
// }


// var myNum = parseFloat(1);
// console.log(myNum);



// var now = new Date();
// var dateString = now.toString();
// console.log(now.getDay());
// console.log(dateString);




// Date and Time Caculator
var startTime = document.getElementById('start-date');
var endTime = document.getElementById('end-date');

function calcTime()
{

    console.log(startTime.value);
    console.log(endTime.value);
}
