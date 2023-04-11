//1
// alert("Welcome to my website");

//2
// alert("Message goes here");


//3
// alert("Happy Coding\nJavaScript");


//4
// alert("Hello... I can run JS through my web browser's console");


// Variable, Strings & Numbers


//1
// var username;


//2
// var myName = "Anis Baloch";


//3
// var message;
// message = "Hello World";
// alert(message);


//4
// var name = "Anis Baloch";
// var age = 28;
// var institute = "Stack Learners";
// var course = "Web Programming";
// console.log(name);
// console.log(age);
// console.log(institute);
// console.log(course);



//4
// var age = 28;
// console.log("I am " + age + " years old.");





//4
// var timesVisited = 7;
// console.log("You have visited this site " + timesVisited + " times");



//4
// var birthYear = 1992;
// var birthYearType = typeof(birthYear);
// console.log("My birth year is " + birthYear);
// console.log("Data type of my declared variable is " + number);



//8
// var childrens = 2;
// var partnerName = "ABC";
// var location = "US";
// var jobTitle = "Software Developer";
// console.log("You will be " + jobTitle + " in " + location + " and married to " + partnerName + " with " + childrens + " kids") ;



//7 Email Address
// var email = "balochanis82@gmail.com";
// console.log("My email address is " + email);
// document.write("<p>My email address is "  + email + "</p>");



//8
// var book = "A smarter way to learn JavaScript";
// alert(book);

//9
// var visitorName = "Sami Khan";
// var productTitle = " T-Shirt(s)";
// var quantity = 3;
// var storeName = "XYZ Clothing store";
// var message = visitorName + " ordered " + quantity + " " + productTitle + " on " + storeName;
// document.write(message);

//Mathematical Operations

// var num1 = 8;
// var num2 = 4;

// var sum = num1 + num2;
// console.log("Sum of " + num1 + " and " + num2 + " is " + sum);

// var subtraction = num1 - num2;
// console.log("Subtraction of " + num1 + " and " + num2 + " is " + subtraction);


// var multiplication = num1 * num2;
// console.log("Multiplication of " +  num1 + " and " + num2 + " is " + multiplication);

// var division = num1 / num2;
// console.log("Division of " + num1 + " and " + num2 + " is " + division);

// var remainder = num1 % num2;
// console.log("Remainder of " + num1 + " and " + num2 + " is " + remainder);




//3
// var myVar;
// console.log("value after declaration is: " + myVar);

// myVar = 3;
// console.log("Initial value: " + myVar);

// myVar = ++myVar ;
// console.log("Value after increment is " + myVar);

// myVar = myVar + 7;
// console.log("Value after addition is " + myVar);

// myVar = --myVar;
// console.log("Value after decrement is " + myVar);

// myVar = myVar % 3;
// console.log("The remainder is " + myVar);


//4
// var ticketPrice = 600;
// var ticketQty = 5;
// var totalTicketsPrice = ticketPrice * ticketQty;
// console.log("Total cost of buy " + ticketQty + " tickets to a movie is " + totalTicketsPrice + " PKR");



//5
// var tableNumber = 4;
// console.log("Multiplication table of " + tableNumber);
// for(var i = 1; i <=10;i++)
// {
//     console.log(tableNumber + " x " + i + " = " + tableNumber * i);
// }

//6
// var cTemp = 60;
// var cToFahr = cTemp * 9 / 5 + 32;
// var celciusToFarenheit = cTemp+' C is ' + cToFahr + ' F.';
// console.log(celciusToFarenheit);


//6
// var fTemp = 45;
// var fToCel = (fTemp - 32) * 5 / 9;
// var farenheitToCelcius = fTemp+' F is ' + fToCel + ' C.';
// console.log(farenheitToCelcius);



//7 Shopping Cart
// var totalMarks = +prompt("Enter your total Marks: ", 300);
// var obtainedMarks = +prompt("Enter obtained Marks: ", 267);
// var percentage = obtainedMarks / totalMarks * 100;

// console.log("Total Marks: " + totalMarks);
// console.log("Obtained Marks: " + obtainedMarks);
// console.log("Percentage: " + percentage);


//8 Currency Converter
// var usDollars = +prompt("Enter US Dollars", 10);
// var saudiRiyals = +prompt("Enter Saudi Riyals" ,25);
// var usdToPkr = usDollars * 160;
// var sarToPkr = saudiRiyals * 43;
// var totalPkr = usdToPkr + sarToPkr;

// console.log("US Dollars to PKR: " + usdToPkr);
// console.log("Saudia Riyals to PKR: " + sarToPkr);

// console.log("Total: " + totalPkr);



//10 
// var num = 10;
// num = num + 5 * 10 / 2;
// console.log(num);


//11
// var birthYear = 1992;
// var currentYear = 2020;
// var totalYears = currentYear - birthYear;

// console.log("Your Birth Year: " + birthYear);
// console.log("Current Year: " + currentYear);
// console.log("They are either " + totalYears + " or " + (totalYears + 1) + " years old.");


//12 Area of Circle
// var a = 2;
// var b = 1;
// var result = --a - --b + ++b + b--;
// console.log(result);


//13
// var favSnack = prompt("Enter your snack", "Sausage");
// var currentAge = +prompt("Enter your current age", 28);
// var maxAge = +prompt("Estimated current age", 29);
// var snackPerDay = +prompt("Snacks per day", 2);
// var totalYears = maxAge - currentAge;
// var totalDays = totalYears * 365;
// var totalSnacks = totalDays * snackPerDay;

// console.log("Favourite Snack: ", favSnack);
// console.log("Current Age: ", currentAge);
// console.log("Estimated Maximum Age: ", maxAge);
// console.log("Snacks per day: ", snackPerDay);
// console.log("You will need " , totalSnacks , " " + favSnack + " to last you until the ripe old age of " + maxAge);


// var cities = [];
// cities[0] = prompt("Enter First City", "Karachi");
// cities[1] = prompt("Enter Second City", "Lahore");
// cities[2] = prompt("Enter Third City", "Quetta");
// cities[3] = prompt("Enter Forth City", "Hyderabad");
// cities[4] = prompt("Enter Fifth City", "Peshawar");
// cities[5] = prompt("Enter Sixth City", "Kashmir");
// console.log(cities);



// var favouriteMovies = [];
// favouriteMovies[0] = prompt("Enter your favourite Movie name");
// favouriteMovies[1] = prompt("Enter your favourite Movie name");
// favouriteMovies[2] = prompt("Enter your favourite Movie name");
// console.log(favouriteMovies);




// var city1 = 
// {
//     name: "Karachi",
//     population: 20000000,
//     provinceNAme: "Sindh",
//     isCapital: true
// }

// var city2 = 
// {
//     name: "Lahore",
//     population: 830000,
//     provinceNAme: "Punjab",
//     isCapital: true
// }


// var city3 = 
// {
//     name: "Sukkur",
//     population: 1500000,
//     provinceNAme: "Sindh",
//     isCapital: false
// }

// var citiesList = [city1, city2, city3];
// console.log(citiesList[0]);
// console.log(citiesList[1]);
// console.log(citiesList[2]);

var students = [
    student1 = {
        name: "anis",
        fatherName: "Abdul Majeed",
        subjects:  ["HTML", "CSS", "Javascript"],
        dateOfBirth: "29 December 1992"
    },
    student2 = {
        name: "Waseem",
        fatherName: "Nisar",
        subjects: ["Refrigeration", "Technician"],
        dateOfBirth: "18 October 1988"
    },
    students3 = {
        name: "Saeem",
        fatherName: "M. Ali",
        subjects: ["Cooking", "Cutting", "Food Handling"],
        dateOfBirth: "19 Sep 1991"
    }

];




// console.log(students[0]);
// console.log(students[1]);
// console.log(students[2]);
// console.log(students[0].subjects);

function greetUser()
{
    console.log("Hello Sir");
}

// greetUser();
// greetUser();

// var fName = prompt("Enter first name" ,"Anis");
// var lName = prompt("Enter last name", "Baloch");

function greetUser2(first, last)
{
    var fullName = first + " " + last;
    var message = console.log(fullName);
    return message;
    
}

// greetUser2(fName, lName);


function addition(num1, num2)
{
    var total = num1 + num2;
    return console.log(total);
    
}

// addition(3,4);


function subtraction(num1, num2)
{
    var result = num1 - num2;
    return console.log(result);
    
}

// subtraction(30,4);




function multiplication(num1, num2)
{
    var result = num1 * num2;
    return console.log(result);
    
}

// multiplication(3,5);


function modulus(num1, num2)
{   
    var result = num1 % num2;
    return console.log(result);
    
}

// modulus(20, 3);



function square(num)
{
    var result = num * num;
    return console.log(result);
    
}

// square(5);




// function pythagorean_theorem(x, y) {
//     if ((typeof x !== 'number') || (typeof y !== 'number')) 
//   return false; 
//           return Math.sqrt(x * x + y * y);
//       }
  
//   console.log(pythagorean_theorem(2, 4));
//   console.log(pythagorean_theorem(3, 4));


// function collectData(name, rollNum, favSub)
// {
//     var stuName = name;
//     var stuRollNum = rollNum;
//     var stuFavSub = favSub;
//     var arr = [stuName, stuRollNum, stuFavSub];
//     return arr;
// }

// console.log(collectData("Anis", "596", "Web"));


function happyBirthday(name)
{
    var username = name;
    var greeting = "Happy Birthday " + name;
    return greeting;
}

console.log(happyBirthday("Anis"));







// var currentDate = new Date();
// var maxAge = new Date("01 January, 2057");
// var totalMilliSeconds = maxAge - currentDate;
// var totalSeconds = totalMilliSeconds / 1000;
// var totalMinutes = totalSeconds / 60;
// var totalHours = totalMinutes / 60;
// var totalDays = totalHours / 24;
// var totalMonths = totalDays / 30;
// var totalYears = totalMonths / 12;

// console.log("Birth Date: ", maxAge);
// console.log("Current Date: ", currentDate);
// console.log("Total Milliseconds: ", totalMilliSeconds);
// console.log("Total Seconds: ", totalSeconds.toFixed());
// console.log("Total Seconds: ", totalMinutes.toFixed());
// console.log("Total Days: ", totalDays.toFixed());
// console.log("Total Months: ", totalMonths.toFixed());
// console.log("Total Years: ", totalYears.toFixed());








