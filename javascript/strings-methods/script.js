// var firstName = prompt("What is your first name?", "anis");
// var lastName = prompt("What is your last name?", "baloch");
// firstName = propTxt(firstName);
// lastName = propTxt(lastName);
// var fullName = firstName + " " + lastName;
// console.log(fullName);


// function propTxt(str)
// {
//         var firstChar = str.slice(0,1);
//         firstChar = firstChar.toUpperCase();
//         var otherChars = str.slice(1);
//         otherChars = otherChars.toLowerCase();
//         return  firstChar + otherChars
// }


// function LowerTxt(str)
// {
//     if(typeof(str) === String)
//     {
//         str = str.toLowerCase();
//         console.log(str);
//     }
// }




// function findLength()
// {
//     var favPhone = prompt("Which is your favourite Phone model", "oppo f9");
//     var numElements = favPhone.length;
//     console.log("The length of your fav phone model: " + favPhone + " is: ", numElements);
// }

// // findLength();


// function findIndexNum()
// {
//     var str = prompt("String: ", "Pakistani");
//     var findStr = prompt("Enter any string", "i");
//     var indexNum = str.indexOf(findStr);

//     if(indexNum <= -1)
//     {
//         console.log("Character not found in string");
//     }

//     else
//     {
//         console.log(indexNum);
//     }

// }

// // findIndexNum();

// function findLastIndex()
// {
//     var str = prompt("String:", "Hello World");
//     var findChar = prompt("Enter any character from your given string", "l");
//     var lastIndexNum = str.lastIndexOf(findChar);
//     var result;
//     if(findChar.length > 1)
//     {
//         result = "please enter a single character";
//     }

//     else if(lastIndexNum < 0)
//     {
//         result = "character not found in string";
//     }

//     else
//     {
//         result = lastIndexNum;
//     }

//     console.log(result);


// }

// // findLastIndex();



// function charAtIndexNum()
// {
//     var str = prompt("Enter string", "Pakistani");
//     var charAt = +prompt("Enter any number", "3");
//     var numElements = str.length;
//     var result;
//     if(charAt > numElements)
//     {
//         result = "Index number is greater then string length\nPlease type any index number lower than or equal to " + numElements;
//     }
//     else
//     {
//         result = str.charAt(charAt);
//     }




// console.log(result);
// }


// // charAtIndexNum();

// // var firstStr = prompt("Enter your first character", "anis");
// // var secondStr = prompt("Enter your second string", "baloch");

// // firstStr = propTxt(firstStr);
// // secondStr = propTxt(secondStr);

// // function concatenateWords(str1, str2)
// // {
// //     var joinedTxt = str1.concat(str2);
// //     console.log(joinedTxt);

// // }

// // concatenateWords(firstStr, secondStr);
// var str = LowerTxt("AnIs");
// console.log(str);

// // function replaceStr()
// // {
    
// // }




// var str = prompt("Enter any single character", "a");
// var charType = str.charCodeAt(0);
// if(str >=65 && str <=90)
// {
//     charType = "Capital Alphabet";
// }

// else if(str >=97 && str <=122)
// {
//     charType = "Lowercase Alphabet";
// }

// console.log(charType);


//4
// var vowels = ["a", "e", "i", "o", "u"];
// var str = prompt("Enter any english character", "b");
// str = str.toLowerCase();
// var indexNum = vowels.indexOf(str);

// if(indexNum === -1)
// {
//     console.log("Character is not a vowel");
// }

// else
// {
//     console.log("Character is vowel");
// }


//5
// var correctPassword = "balochanis";
// var userInput = prompt("Enter your password", "");

// if(userInput === "")
// {
//     console.log("Please enter your password");
// }

// else if(userInput === correctPassword)
// {
//     console.log("Your password is correct");
// }

// else
// {
//     console.log("Your given password is incorrect");
// }




//6
// var hour = 20;
// var greeting;
// if(hour < 18)
// {
//     greeting = "Good Day";
// }

// else if(hour > 18)
// {
//     greeting = "Good Evening";
// }
// console.log(greeting);



//7
// var userInput = prompt("Enter hour", "1900");
// var hour = userInput.slice(0,2);
// var minute = userInput.slice(2);
// var timeType;
// if(hour >= 00)
// {
//     timeType = "A.M";
// }

// else if(hour >= 13)
// {
//     timeType = "P.M";
// }

//  console.log(timeType);



//15
var userInput = +prompt("Enter password");
var inputLength = userInput.length;
if(inputLength < 6)
{
    console.log("Password should be 6 characters or more");
}

// else if(typeof(inputLength[0]) == Number)
// {

// }