// var cities = ["Karachi","Lahore","Kashmir"];
// var anis = {
//     fullName : "Anis Baloch",
//     dateOfBirth: "29Dec1992",
//     nationality: "Pakistani",
//     favColors: ["Blue","Purple","Cyan"]
// }
// console.log(anis.favColors[1]);
// console.log(cities[3]);
// console.log(typeof(cities));

// cities.pop();
// console.log(cities);
// cities.push("Islamabad");
// console.log(cities);
// console.log(++cities.length);

// var cities = ["Karachi", "Lahore", "Islamabad","Rawalpindi","Hyderabad"];
// console.log(cities);

// //removed hyderbabad
// console.log("Removed hyderabad");
// cities.pop();
// console.log(cities);

// //added sukkur at end
// console.log("Sukkur added at end")
// cities.push("Sukkur");
// console.log(cities);


// //karachi removed from cities
// console.log("Karachi removed");
// cities.shift();
// console.log(cities);

// //gujranwala added at beginning
// console.log("gujranwala added at beginning");
// cities.unshift("Gujranwala");
// console.log(cities);

// var provinces = ["Sindh", "Balochistan", "Punjab", "KPK"];
// console.log(provinces);

// var paki = ["Karachi", "Lahore", "Peshawar"];
// console.log(paki.length);

// //add the end of the array
// paki.push("Peshawar");
// paki.push("Quetta");
// console.log(paki);

// paki.unshift("Hyderabad");
// paki.unshift("Multan");
// console.log(paki);


// var fruits = ['apple', 'banana', 'grapes', 'strawberry', 'orange'];


// var indexes = fruits.indexOf('grapes');
// // console.log(indexes);
// fruits.splice(indexes,1);
// console.log(fruits);


document.write("<h1>Top 10 Hollywood Movies</h1>");
var topMovies = [];
topMovies.push("Avengers: Age of Ultron");
topMovies.push("Spectre");
topMovies.push("Jurassic World");
topMovies.push("Inside Out");

console.log(topMovies);

for(var i = 0; i <topMovies.length; i++)
{
    console.log(topMovies[i]);
}

var colors = ["Blue", "Purple", "Orange", "Green"];
var addInBeginning = prompt();