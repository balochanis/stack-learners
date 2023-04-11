// import {sum,myAge} from   './math-module.js';
// console.log(sum(99,5));

// console.log(myAge);

//Import all things from external file
// import * as mathFunc from './math-module.js';
// console.log(mathFunc.sum(10,10));

import student from './math-module.js';
// console.log(`${student.nationality}`);


fetch("https://jsonplaceholder.typicode.com/todos/3")
    .then((response) =>
    {
        return response.json();
    })
    .then((data) =>
    {
        console.log(data);
    })


