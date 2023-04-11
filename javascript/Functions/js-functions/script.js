function takeOrder(item, price)
{
    var message = "Take " + item + " and " + price;
    // console.log(message);
}


// takeOrder("Chicken", 500);
// takeOrder("Beef", 200);
// takeOrder("Fish", 300);


function calculateNums(num1, num2)
{
    var total = num1 + num2;
    console.log(total);
}
// calculateNums(4,9);




function greetUser(fName, lName)
{
    var fullName = fName + " " + lName;
    console.log("Welcome " + fullName);


}
// var firstNameInput = prompt("Enter your first name", "Anis");
// var lastNameInput = prompt("Enter your last name", "Baloch");

// greetUser(firstNameInput, lastNameInput);
// greetUser("Tony", "Stark");



function sumNums(num1, num2)
{
    var sum = num1 + num2;
    return sum;
}


var sum = sumNums(4,5);
// console.log(sum);

function previousBill(num)
{
    var totalPrevious = num*num;
    return totalPrevious;
}

function currentBill(num1,num2)
{
    var previous = previousBill(num1);
    var current = previousBill(num2);
    var total = previous+current;
    return total;
}

var result = currentBill(4,5);
// console.log(currentBill());


function square(num)
{
    return num * num;
}

function openWholeSquare(num1, num2)
{
    var num1Square = square(num1);
    var num2Square = square(num2);
    var calculatedNum = num1Square + 2 * num1 * num2 + num2Square;
    return calculatedNum;
}

var myRes = openWholeSquare(5,5);
console.log(myRes);