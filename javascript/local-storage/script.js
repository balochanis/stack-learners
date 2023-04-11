var stuNameEl = document.getElementById('studentName');
var rollNumEl = document.getElementById('rollNum');
var allStudents = [];

function saveStudent()
{
    var student = 
    {
        name: stuNameEl.value,
        roll: rollNumEl.value
    };

    var savedStudents = localStorage.getItem("students");

    if(savedStudents)
    {
        savedStudents = JSON.parse(savedStudents);
        allStudents = savedStudents;
    }

    allStudents.push(student);
    console.log(allStudents);
}