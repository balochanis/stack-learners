// var now = new Date();
// var currentDay = now.getDay();
// var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var currentHours = now.getHours();
// var currentMinutes = now.getMinutes();
// var currentSeconds = now.getSeconds();
// var timeType;

// if(currentHours > 12)
// {
//     timeType = " PM"
//     currentHours = currentHours - 12;
// }

// else
// {
//     timeType = " AM";
// }



// console.log(now);
// console.log(days[currentDay]);
// console.log(currentHours + timeType  + " : " + currentMinutes + " : " + currentSeconds);

// function printed()
// {
//     window.print();

// }



// function getDate()
// {
//     var now = new Date();
//     var currentDate = now.getDate();
//     var currentMonth = now.getMonth();
//     curentMonth = ++currentMonth;
//     if(currentMonth <10)
//     currentMonth = currentMonth.toString();
//     currentMonth = "0" +currentMonth;
//     var currentYear = now.getFullYear();

//     var mmddyy = currentMonth + "-" + currentDate + "-" + currentYear;
//     var ddmmyy = currentDate + "-" + currentMonth + "-" + currentYear;

//     console.log("mm-dd-yyyy " + mmddyy);
//     console.log("dd-mm-yyyy " + ddmmyy);
// }

// getDate();




// var str = "bAloCh";
// var capitalStr = strUpper(str);
// var properStr = strProper(str);
// console.log(capitalStr);
// console.log(properStr);



// function strUpper(str)
// {
//     var strings = str.toUpperCase();
//     return strings;
// }


// function strProper(str)
// {
//     var firstChar = str.slice(0,1);
//     var otherChars = str.slice(1);
//     firstChar = firstChar.toUpperCase();
//     otherChars = otherChars.toLowerCase();
//     var chars = firstChar + otherChars;
//     return chars;
// }






// var startMilli = startDate.getMilliseconds();
// var endMilli = endDate.getMilliseconds();
// var startingDays = (startMilli / 1000 / 60 / 60 / 24) ;
// console.log(startingDays);

// var endingDays;
// // var totalDays = 

// var userDate = startDate.getDate();
// var userDay = startDate.getDay();
// var daysList = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];


// console.log(startDate);
// console.log(userDate);
// console.log(userDay);




// for(var i=0; i<=100; i++)
// {
// if(userDate === "1" && userDay === "1")
// {
// }
// console.log(userDate);
// }

// console.log(daysList[userDay]);



// function gettingDate()
// {
//     var start = new Date("1 january, 2014");
//     var end = new Date("1 january, 2050");
//     var startMilliSeconds = start.getTime();
//     var endMilliSeconds = end.getTime();
//     var startDay = start.getDay();
//     var daysList = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
//     var thatDay = daysList[startDay];
//     var startDate = start.getDate();
//     console.log(startDate);
    
//     console.log(daysList[startDate]);
    
// }




// gettingDate();


// var num1 = 5;
// var num2 = 9;
// // var result = (num1++ + ++num1 + --num2 - num2++)
// // console.log(result);

// // (9 + 7 + 5 + 3)24
// // var result2 = (num2-- + --num2 + num1-- + --num1);
// // console.log(result2)

// // (5 + 6 + 6 + 7)24
// var result3 = (num1++ + num1-- + ++num1 + ++num1);
// console.log(result3);




// Returns if a value is a string
// var result;
// function checkType(value)
// {
//   if(typeof value === 'string')
//   {
//     result = "datatype string";
//   }

//   else if(typeof value === 'number')
//   {
//     result = "datatype number";
//   }

//   else if(typeof value === 'boolean')
//   {
//     result = "datatype boolean";
//   }

//   else if(typeof value === 'object')
//   {
//     result = "datatype object";
//   }
//   else
//   {
//     result = "something else";
//   }
// }

// var firstName = "anis";
// var lastName = "BaLoCh";

// function capStr(str)
// {
//   var firstChar = str.slice(0,1);
//   var otherChars = str.slice(1);

//   return firstChar.toUpperCase() + otherChars.toLowerCase();
  
// }
// var fCap = capStr(firstName);
// var lCap = capStr(lastName);


// var result = concatenation(fCap, lCap);
// console.log(result);



// function concatenation(first, second)
// { 
//   return first + " " + second;
// }
var users = [];
function submitUser()
{

  
  var userEmail = document.getElementById('email');
  // if(users.indexOf(userEmail.value) == -1)
  // {
  //   users.push(userEmail.value);
  //   userEmail.value = "";
    
  // }

  // else
  // {
  //   console.log("user already found");
    
  // }


  // if(userEmail.value.indexOf("@") !== -1)
  // {
  //   console.log("email is valid");
    
  // }

  // else
  // {
  //   console.log("email is invalid") ;
  // }




  // console.log(users);
}
  


// var per = 100;
// var grade;
// var remarks;
// if(per >= 80)
// {
//   grade = "A+";
//   remarks = "Excellent";
// }

// else if(per >= 70)
// {
//   grade = "A";
//   remarks = "Very Good";
// }


// else if(per >= 60)
// {
//   grade = "B";
//   remarks = "Good";
// }

// else if(per >= 50)
// {
//   grade = "C";
//   remarks = "Fair";
// }

// else if(per >= 40)
// {
//   grade = "D";
//   remarks = "Not Fair";
// }

// else if(per <40)
// {
//   grade = "Fail";
//   remarks = "Poor";
// }


// console.log(grade, remarks);



//Simple Calculator

var num1El = document.getElementById('first-num');
var num2El = document.getElementById('second-num');
var resultEl = document.getElementById('result');
var userInput = document.getElementById('operation');

function calculate()
{
  
if(userInput.value  === "+")
{
    resultEl.innerHTML = parseInt(num1El.value) + parseInt(num2El.value);
}

else if(userInput.value === "-")
{ 
  resultEl.innerHTML = num1El.value - num2El.value;
} 


else if(userInput.value === "*")
{
  resultEl.innerHTML = num1El.value * num2El.value;
}


else if(userInput.value === "/")
{
  resultEl.innerHTML = num1El.value / num2El.value;
} 


else if(userInput.value === "%")
{
  resultEl.innerHTML = num1El.value % num2El.value; 
}

}

// console.log(result);
