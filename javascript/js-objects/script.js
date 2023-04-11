// var userInput = prompt("Which property do you want to access?");

var student = 
{
    name: "Anis",
    course: "Web Programming",
    dateOfBirth: "29 Dec, 1992",
    email: "balochanis82@gmail.com",
    gender: "Male",
    network: "Telenor",
    salary: 21000,
    favColors:  ["purple", "blue"]
}


for(var key in student)
{
    console.log(key);
    console.log(student[key]);
    
}

// var isEmailExist = "email" in student;

// console.log(isEmailExist);

// delete student.email;

// console.log(isEmailExist);







for(var keys in student)
{
    // console.log(keys);
    
}


// console.log(student);
// console.log(student[userInput]);


var user = {};

// var propInput = prompt("Type your property Name", "userName");
// var valInput = prompt("Type your value Name", "balochanis10");
// user[propInput] = valInput;
// console.log(user.userName);
