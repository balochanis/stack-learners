let arr = ["anis", "baloch", "balochanis82"];

let [,lastName , myEmail] = arr;
// console.log(myEmail);
// console.log(lastName);


let student = 
{
    name: "Anis Baloch",
    nationality: "Pakistani",
    course: "Web Programming"
};

let {name, course} = student;

console.log(`Hi, ${name}, You are enrolled in ${course}.`);