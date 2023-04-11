//1
// for(var i=0; i<5; i++)
// {
//     console.log("Hello world");
// }


//2
// for(var i=1; i<=10; i++)
// {
//     console.log(i);
// }


//3
// var tableNum = +prompt("Enter a number to print its multiplication table", 2);
// var tableLength = +prompt("Enter length of multiplication table", 15);

// for(var i=1; i<=tableLength; i++)
// {
//     console.log(tableNum + " x " + i + " = " + tableNum * i);
// }

//4
// var A = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"];
// for(var i=0; i<A.length; i++)
// {
//     console.log(A[i]);
// }



//5
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// var numElements = fruits.length;
// for(var i=0; i<numElements; i++)
// {
//     console.log("Element at index " + i + " is " + fruits[i]);
// }


//6
// var numOfItems = +prompt("Enter number of items", 4);
// var items = ["keyboard", "mouse", "flash drive", "cpu"];
// var numArray = [];

// for(var i=0; i<numOfItems; i++)
// {
//     numArray.push(prompt("Enter value for index "+ i, items[i] ));
// }
// console.log("Number of items: " + numOfItems);
// console.log(numArray);


//7 Counting
// document.write("<h2>Counting:</h2>");
// for(var i=1; i<=15; i++)
// {
//     document.write(i + ", ");
// }

//7 Reverse
// document.write("<h2>Reverse:</h2>");
// for(var j=10; j>0; j--)
// {
//     document.write(j + ", ");
// }

//7 Even
// document.write("<h2>Even:</h2>");
// for(var i=0; i<=20; i+=2)
// {
//     document.write(i + ", ");
// }

//7 Odd
// document.write("<h2>Odd:</h2>");
// for(var i=1; i<=20; i+=2)
// {
//     document.write(i + ", ");
// }



//7 Series
// document.write("<h2>Series</h2>");
// for(var i=2; i<=20; i+=2)
// {
//     document.write(i + "k, ");
// }



//8
// var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
// var arrElements = arr.length;
// var userInput = prompt("Welcome to ABC Bakery What do you want to order sir/ ma'am?", "cake");
// var isFound = false;
// var indexNum;
// for(var i=0; i<=arrElements; i++)
// {
//     if(arr[i] === userInput)
//     {
//         isFound = true;
//         indexNum = i;
//         break;
//     }
// }


// if(isFound)
// {
//     console.log(userInput + " is available at index " + indexNum + " in our bakery");
// }

// else
// {
//     console.log("We are sorry, " + userInput + " is not available in our bakery");
// }









//9
// var nums = [24, 53, 78, 91, 12];
// var numsElements = nums.length;
// var maxNum = nums[i];

// for(var i=0; i<numsElements; i++)
// {
//     if(nums[i] > maxNum )
//     {
//         maxNum = nums[i];
//     }
// }

// console.log("Array items: " + nums);
// console.log("The largest number is " + maxNum);


//10
// var nums = [24, 53, 78, 91, 12];
// var numsElements = nums.length;
// var minNum = nums[0];

// for(var i=0; i<numsElements; i++)
// {
//     if(nums[i]< minNum)
//     {
//         minNum = nums[i];
//     }
// }

// console.log("Array items: " + nums);
// console.log("The smallest number is: " + minNum);



//11
// var arr = [24, 53, 78, 91, 12];
// var arrElements = arr.length;
// var maxNum = arr[0];
// var minNum = arr[0];

// for(var i=0; i<=arrElements; i++)
// {
//     if(arr[i] > maxNum)
//     {
//         maxNum = arr[i];
//     }

//     else if(arr[i] < minNum)
//     {
//         minNum = arr[i];
//     }
// }

// console.log("Array items: " + arr);
// console.log("The smallest number is " + minNum);
// console.log("The largest number is " + maxNum);


//12
// for(var i=5; i<=100; i = i+ 5)
// {
//     console.log(i);
// }


//13
// var students = ["Ali", "Sami", "Taha", "Inam"];
// var numElements = students.length;
// var scores = [58, 73, 89, 90];

// var students = [
//     {name: "Ali", score: 58},
//     {name: "Sami", score: 73},
//     {name: "Taha", score: 89},
//     {name: "Inam", score: 90}
// ];
// document.write("<table>");
// document.write("<tr> <td>Name</td>  <td>Score</td></tr>");
// for(var i=0; i<numElements; i++)
// {
//     document.write("<tr><td>" + students[i].name + "</td>" + "<td>" + students[i].score + "</td></tr>");
// }
// document.write("</table>");


//14
// var scores = [12, 45, 3, 22, 34, 50];
// var numElements = scores.length;
// var stopLoopAt = 5;

// for(var i=0; i<=numElements; i++)
// {
//     if(stopLoopAt === scores[i])
//     {
//         var newArray = scores.slice(0,++i);
//     }

//     else
//     {
//             var newArray = scores.slice(0, stopLoopAt);
//     }
// }

// console.log(newArray);




//15
// var multiArray = [[1,2,3], [4,5,6], [7,8,9]];
// var numElements = multiArray.length;
// for(var i=0; i<numElements; i++)
// {
//     console.log(multiArray[i]);
// }


//16
// var userInput = +prompt("Enter a number", 5);
// for(var i=5; i>=0; i=i-0.5)
// {
//     document.write(i + ", ");
// }

//17
// for(var i=0; i<=20; i++)
// {
//     if(i % 2 === 0)
//     {
//         console.log(i + " is Even");
//     }

//     else if(i % 2 !== 0)
//     {
//         console.log(i + " is Odd");
//     }
// }


//18
// var oddNums = 1;
// for(var i = 1; i<=7; i+=2 )
// {
//     oddNums = i * oddNums;
// }
// console.log(oddNums);



//19
// var numOfStars = 7;
// var str = "*******";
// for(var i=0; i<=7; i++)
// {
//     document.write("<h1>" + str + "</h1>");
//     str = str.slice(0,str.length-1);
// }




//20A
// var str = "*****";
// for(var i=0; i<4; i++)
// {
//     document.write("<h1>" + str + "</h1>");
// }




//20B
// var str = "*";
// var numElements = 5;
// for(var i=0; i<numElements; i++)
// {
//     document.write("<h1>" + str + "</h1>");
//         str = str + "*";
// }



// 20C
// var stars = "*****";
// var numElements = 5;
// for(var i=5; i>=1; i--)
// {
//         document.write("<h1>" + stars.slice(0,i) + "</h1>");
// }