//Finding a month by for loop
// var months = ["jan", "feb", "mar", "apr"];
// var monthsLength = months.length;

// var userInput = prompt("Enter a month", "march");
// userInput = userInput.slice(0,3);
// userInput = userInput.toLowerCase();
// var message = false
// for(var i = 0; i<=monthsLength; i++)
// {
//     if(userInput === months[i])
//     {
//         message = true;
//         break;
//     }

// }

// if(message === true)
// {
//     console.log("Month found");
// }

// else
// {
//     console.log("Month not found");
// }

// console.log(months);
// console.log(userInput);
// console.log(message);



// var months = ["jan", "feb", "mar", "apr"];
// var monthsLength = months.length;

// var userInput = prompt("Enter a month", "march");
// userInput = userInput.slice(0,3);
// userInput = userInput.toLowerCase();
// var message = false

// var isFound = months.indexOf(userInput);
// if(isFound > -1)
// {
//     message = true;
// }

// if(message)
// {
//     message = "match is found";
// }


// else
// {
//     message = "match is not found";
// }
// var resultPage = document.getElementById('result');
// resultPage.innerHTML = message;
// var userEmailEl = document.getElementById('userEmail');
// userEmailEl.value


// function registerUser()
// {
//     var users = ["anis_baloch10@yahoo.com", "balochanis82@gmail.com"];
//     var usersLength = users.length;
//     var isFound = false;
//     var message = '';


//     if(users.indexOf(userEmailEl.value) > -1)
//     {
//         message = true;
//     }

//     if(message = true)
//     {
//         document.write("User Found");

//     }

//     else
//     {
//         document.write("User Added in the array");
//         users.push(userEmailEl.value);
//     }

// }





//     // var usersLength = users.length;
    
//     // var addUser = document.getElementById('userEmail');
//     // addUser.value = addUser.toLowerCase();
//     // console.log(addUser);
    
//     // var alreadyExit = users.indexOf(addUser);
//     // var message = '';
//     // if(alreadyExit > -1)
//     // {
//     //     message = "user already exist";
//     // }
    
//     // else if(addUser.includes("@",0) === false)
//     // {
//     //     message = "Please enter valid email address";
//     // }
    
    
    
//     // else
//     // {
//     //     message = "your account is registered";
//     //     users.push(addUser);
//     // }
//     // console.log(message);
//     // console.log(users);





// var fruits = ['apple', 'banana', 'mango', 'melon', 'strawberry', 'avocado'];
// console.log(fruits);
// //index number of melon
// var indexOfMelon = fruits.indexOf('melo');
// if(indexOfMelon !== -1)
// {
//     fruits.splice(indexOfMelon,1);
//     console.log("item found and deleted");
// }

// else
// {   
//     console.log("item not found");
// }
// //delete melon

// console.log(fruits);




var cities = [];

var operation = prompt("Delete or Add");

// if(operation === "add")
// {
//     var addCity = prompt("Enter city name to add");
//     var indexNumber = cities.indexOf(addCity);

//     if(indexNumber === -1)
//     {
//         cities.push(addCity);
//     }
//     console.log(cities);

// }

// var indexNumber = cities.indexOf(userInput);

// if(operation === "add" && indexNumber === -1)
// {
//     cities.push(userInput);
//     console.log(userInput, " has been added in the list");
// }

// else
// {
//     console.log("item already found in array in index number", cities.indexOf(userInput));
// }
// var fullName = prompt("Enter your full name", "anis baloch");
// var space = " ";
// var firstNameIndex = fullName.indexOf(space);
// var lastNameIndex = fullName.lastIndexOf(space) + 1;
// var lastName = fullName.slice(lastNameIndex);
// var firstName = fullName.slice(0, firstNameIndex);
// firstName = toProperCase(firstName);
// lastName = toProperCase(lastName);
// function toProperCase(str)
// {
//     let firstChar = str.slice(0,1);
//     let otherChars = str.slice(1);
//     firstChar = firstChar.toUpperCase();
//     otherChars = otherChars.toLowerCase();
//     let proper = firstChar + otherChars;
//     return proper;
// }
// console.log(firstName + " " + lastName);



// var str = "********";
// var numElements = str.length;
// for(var i=0; i <=numElements; i++)
// {
//     document.write("<h1>"+ str + "</h1>");
//     str = str.slice(0, str.length -1);
// }


// var str = "*";
// var numElements = str.length;
// for(var i=0; i <10; i++)
// {
//     document.write("<h1>"+ str + "</h1>");
//     str =  str + "*";
// }