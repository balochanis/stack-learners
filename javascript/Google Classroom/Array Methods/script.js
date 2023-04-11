// // 1 Empty literal notation
// var students = [];

// // 2 Empty object notation
// var students2 = {};

// // 3 string array
// var fruits = ["banana", "mango", "cherry", "apple", "melon"];

// //4 numbers array
// var prices = [80, 150, 220, 300, 140];

// //5 boolean array
// var isFavourite = [true, false, true, false, true];

// //6 mixed array
// var myFavFruit = ["pomegranate", 280, true];

// //7 Store Networks
// var networks = ["jazz", "warid", "telenor", "zong", "ufone"];

// //8 Education Qualification


//     var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"];
   
  
//     for(var i = 0; i<qualifications.length; i++)
//         {
//             console.log(i+1  + ") " + qualifications[i]);
//         }
        
    



// //9 Top Movies of 2015

//     var topMoviesList = ["Avengers: Age of Ultron", "Spectre", "Jurassic World", "Inside Out"];
//     for(var i = 0; i<topMoviesList.length; i++)
//         {
//             console.log(i+ 1 + ") "+ topMoviesList[i]);
//         }
    
//     console.log("Length of the array: " + topMoviesList.length);


// //10 Favorite Cars


//     var favCars = ["audi", "volvo", "ford", "lamborghini"];
//     console.log(favCars);
 
    
//     var firstIndex = favCars.indexOf("audi");
//     console.log("First index of the array: " + firstIndex);
    
//     var firstCar = favCars[0];
//     console.log("Car at first index of the array: ", firstCar);
    
//     var lastCar = favCars.lastIndexOf("lamborghini");
//     console.log("Last index of the array: " + lastCar);
    
//     var carAtLastIndex = favCars[lastCar];
//     console.log("Car at last index of the array: " + carAtLastIndex);


// //11 Students Names & Marks
// var studentNames = ["Michael", "John", "Tony"];
// var obtainedMarks = [320, 230, 480];
// var totalMarks = 500;

// for(var i = 0; i<studentNames.length; i++)
// {
//     console.log("Score of " + studentNames[i] +  " is " +obtainedMarks[i] + ". Percentage: " + obtainedMarks[i]/totalMarks * 100 + "%");
// }

//12 Color Names
// var colors = ["red", "green", "blue"];
// console.log(colors);

//A
// var addColorInBeginning = prompt("Which color do you want to add in beginning of the array", "Purple");
// colors.unshift(addColorInBeginning);
// console.log(addColorInBeginning + " color added on the beginning of the array");
// console.log(colors);


//B
// var addColorInEnd = prompt("Add a color in the end of the array?", "Orange");
// colors.push(addColorInEnd);
// console.log(addColorInEnd + " color added in the end of the array");
// console.log(colors);

//C Add two colors in the beginning
// var addAnotherColor1 = prompt("Add another color in the beginning of the array", "Skyblue");
// var addAnotherColor2 = prompt("Add another color in the beginning of the array", "Violet");
// colors.unshift(addAnotherColor1, addAnotherColor2);
// console.log(addAnotherColor1 + " and " + addAnotherColor2 + " are added in the colors");
// console.log(colors);

//D Delete the first color from the array
// var deletedFromStart = colors.shift();
// console.log(deletedFromStart + " color deleted from the beginning from the array");
// console.log(colors);


//E Delete the last color from the array
// var deletedFromEnd = colors.pop();
// console.log(deletedFromEnd + " deleted from the end of the array");
// console.log(colors);

//F Asking color name and index to add color in array
// var addColor = prompt("Type a color name to add in Array", "Brown");
// var addColorIndex = +prompt("Enter index Number to add color",3);
// var addedColor = colors.splice(addColorIndex, 0, addColor);
// console.log(colors[addColorIndex] + " added in the array");
// console.log(colors);

//G Asking index and items to delete from the array
// var askIndexToDelete = +prompt("Type a number where you want to delete a color from array", 1);
// var askItemsToDelete = +prompt("Type a number of length to delete items from the array", 2);
// colors.splice(askIndexToDelete, askItemsToDelete);
// console.log(colors);


//13 Using Array method to sort array
// var scoresOfStudents = [320, 230, 480, 120];
// console.log("Scores of Students: " + scoresOfStudents);
// scoresOfStudents = scoresOfStudents.sort();
// console.log("Ordered scores of students " + scoresOfStudents);


//14
// var fruitsList = ["strawberry", "apple", "orange", "banana"];
// console.log("Fruits list: " + fruitsList);
// fruitsList = fruitsList.sort();
// console.log("Ordered fruits list: " + fruitsList);


//15
// var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// console.log("Cities list: " + cities);
// var selectedCities = cities.slice(2,4);
// console.log(selectedCities);


// //16 
// var myArray = ["This", "is", "my", "cat"];
// console.log("Array" + myArray);
// myArray = myArray.join( " ");
// console.log(myArray);


//17  and 18 FIFO wala samajh nai aa raha




//19
// var companies = ["Apple", "Motorola", "Nokia", "Sony", "Haier"];
// document.write("<select>");
// for(var i = 0; i<companies.length; i++)
// {
//     document.write("<option>" + companies[i] + "</option>");

// }
// document.write("</select>");


//20 Multidimensional Array
// var multiArray = [ [], [], [] ];
// var multiArray2 = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];
// console.log(multiArray2);




