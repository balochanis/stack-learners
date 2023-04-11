// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

var now = new Date();
var daysList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var currentDay = now.getDay();
var currentDayName = daysList[currentDay];
console.log("Today is: " + currentDayName);

var currentHour = now.getHours();
var timeType;
if(currentHour <= 12)
{
    timeType = "AM";

}
else if(currentHour > 12)
{
    timeType = "PM";
    currentHour = currentHour - 12;
}

var currentMinutes = now.getMinutes();
if(currentMinutes < 10 )
{
    currentMinutes = "0" + currentMinutes;
}

var currentSeconds = now.getSeconds();
if(currentSeconds < 10)
{
    currentSeconds = "0" + currentSeconds;
}
console.log("Current time is: " + currentHour + timeType + " " + currentMinutes +  ":" + currentSeconds);



//2
function printWindow()
{
    window.print();
}



//3
var now = new Date();
var dd = now.getDate();
var mm = now.getMonth();
var yyyy = now.getFullYear();

if(dd < 10)
{
    dd = "0" + dd;
}

if(mm < 10)
{
    mm = "0" + mm;
}

var today = dd + "-" + mm + "-" + yyyy;
console.log(today);
today = dd + "/" + mm + "/" + yyyy;
console.log(today);
today = mm + "-" + dd + "-" + yyyy;
console.log(today);
today = mm + "/" + dd + "/" + yyyy;
// console.log(today);


//4

var side1 = 5;
var side2 = 6;
var side3 = 7;
var s = (side1 + side2 + side3)/2;
var area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));
console.log(area);
