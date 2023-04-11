// var city = prompt("What is your city name?","Karachi");
// if(city === "Karachi")
// {
//     alert("Welcome to city of lights");
// }

// else
// {
//     alert("sorry! your city name not found");
// }



// var gender = prompt("Your gender","Male");
// if(gender === "Male")
// {
//     alert("Good Morning Sir");
// }

// else if(gender === "Female")
// {
//     alert("Good Morning Ma'am");
// }
// else
// {
//     alert("Sorry");
// }



// var roadSignal = prompt("What is the color of light","red");
// roadSignal = roadSignal.toLowerCase();

// if(roadSignal === "red")
// {
//     alert("Must Stop");
// }

// else if(roadSignal === "yellow")
// {
//     alert("Ready to move");
// }

// else if(roadSignal === "green")
// {
//     alert("Move now");
// }

// else
// {
//     alert("Your response is invalid");
// }



// var fuelLevel = 0.25;
// var remainingFuel = prompt("What is your fuel level", fuelLevel);
// remainingFuel = parseFloat(remainingFuel);

// if(remainingFuel >=  0.25)
// {
//     alert("Your fuel level is ok");
// }

// else
// {
//     alert("Your fuel level is very low please refill");
// }


// var a = 4;
// if(++a === 5)
// {
//     alert("Given condition for variable is a true");
// }


// var b = 82;
// if(b++ === 83)
// {
//     alert("given condition is true"); 
// }
// else
// {
//     alert("given condition is false");
// }

// var c = 12;
// if(c++ === 13)
// {
//     alert("condition 1 is true");
// }

// if(c === 13)
// {
//     alert("Condition 2 is true");
// }



// var materialCost = 2000;
// var laborCost = 500;
// var totalCost = materialCost + laborCost;
// if(totalCost === laborCost + materialCost)
// {
//     alert("The cost equals");
// }


// if(true)
// {
//     alert("True");
// }

// if(false)
// {
//     alert("False");
// }


// if("car"< "cat")
// {
//     alert("car is smaller than cat");
//     console.log("car".codePointAt(1));
// }


// document.write("<h1>Mark Sheet</h1>");
// var totalmarks = 300;
// var marksObtained = 219;
// var percentage, grade, remarks;
// percentage = marksObtained/totalmarks * 100;
// console.log(percentage);

// if(percentage>=80)
// {
//     grade = "A-One";
//     remarks = "Excellent";
// }

// else if(percentage>=70)
// {
//     grade = "A";
//     remarks = "Good";
// }

// else if(percentage>=60)
// {
//     grade = "B";
//     remarks = "You need to improve";
// }

// else if(percentage<60)
// {
//     grade = "Fail";
//     remarks = "Sorry";
// }

// console.log("Total Marks: " + totalmarks);
// console.log("Obtained Marks: " + marksObtained);
// console.log("Percentage: " + percentage);
// console.log("Grade: " + grade);
// console.log("Remarks: ",remarks);

// var inpNum = parseInt(prompt("Enter a number ", "10"));
// var modulus = 3;
// var result = inpNum % modulus;
// if(result === 0)
// {
//     console.log("It can be divide by your given number");
// }

// else if(result > 0)
// {
//     console.log("I cannot be divided");
// }


// var customerNum = parseInt(prompt("Please type your number"));
// customerNum = customerNum % 2;
// if(customerNum === 0 )
// {
//     console.log("Even");
// }

// else
// {
//     console.log("Odd");
// }

// var temperature = parseInt(prompt("Please type your temperature", "40"));
// if(temperature > 40)
// {
//     console.log("It is too hot outside");
// }

// else if(temperature > 30)
// {
//     console.log("The Weather today is Normal");
// }

// else if(temperature > 20)
// {
//     console.log("Today's Weather is cool");
// }

// else if(temperature > 10)
// {
//     console.log("IMG! Today weather is so Cool");
// }


var firstNumber = parseInt(prompt("First Number", "4"));
var secondNumber = parseInt(prompt("Second Number", "4"));
var operation = prompt("Which operation do you want to apply between these numbers?");
var operationType;
var result;
if(operation === "+")
{
    result = firstNumber + secondNumber;
    operationType = "You choose Addition operation";
    // console.log(result);
}

else if(operation === "-")
{
    result = firstNumber - secondNumber;
    operationType = "You choose Subtraction operation";
    // console.log(result);

}

else if(operation === "*")
{
    result = firstNumber * secondNumber;
    operationType = "You choose Multiplicaton operation";
    // console.log(result);

}

else if(operation === "%")
{
    result === firstNumber % secondNumber
    operationType = "You choose Modulus operation";
    // console.log(result);
    
}

else if(operation === "/")
{
    result = firstNumber / secondNumber;
    operationType = "You choose Divide operation";
}

else
{
    alert("Please provide a number");
}

console.log(firstNumber);
console.log(secondNumber);
console.log(operationType);
console.log(result);