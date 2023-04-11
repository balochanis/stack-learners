// var dateOfBirth = new Date("December 29, 1992");
// var currentDate = new Date();
// var totalDays = currentDate - dateOfBirth;
// totalDays = Math.floor(totalDays / (1000 * 60 * 60 * 24));
// var totalMonths = Math.floor((currentDate - dateOfBirth) / (1000 * 60 * 60 * 24 * 12));
// console.log("Date of Birth: " + dateOfBirth);
// console.log("Current Date: " + currentDate);
// console.log("Total Days: " + totalDays);
// console.log("Total Months: " + totalMonths);
// console.log(dateOfBirth.getDate() + String(dateOfBirth.getMonth() + 1));



// var myDateOfBirth = new Date("December 29, 2020");
// var rightNow = new Date();
// var totalTime = myDateOfBirth - rightNow;
// totalTime = totalTime / (1000 * 60 * 60 * 24);
// console.log(totalTime);





// var dateOfBirth = new Date("December 29, 1992");
// var rightNow = new Date();
// var birthYear = dateOfBirth.getFullYear();
// var currentYear = rightNow.getFullYear();
// var totalYears = currentYear - birthYear;
// console.log("Date of Birth" + dateOfBirth);
// console.log("Current Date: " + rightNow);

// console.log("Your age: " + totalYears);
// console.log("Your Birth Year: " + birthYear);


var myBirthDate = new Date("December 29, 1992");
var rightNow = new Date();
var myBirthDateInMilliSeconds = myBirthDate.getTime();
var currentMilliSeconds = rightNow.getTime();
var totalMilliSeconds = currentMilliSeconds - myBirthDateInMilliSeconds;
var totalYears = totalMilliSeconds / (1000 * 60 * 60 * 24 * 365);
totalYears = Math.round(totalYears);
console.log(totalYears);