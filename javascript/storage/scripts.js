var studentNameEl = document.getElementById('student-name');
var allStudents = [];


function saveStudent()
{
    var student = 
    {
        studentName : studentNameEl.value
    };

    var savedStudents = localStorage.getItem("students");


    if(savedStudents)
    {   
        savedStudents = JSON.parse(savedStudents);
        allStudents = savedStudents;
        
    }

    allStudents.push(student);

    student = JSON.stringify(allStudents);

    localStorage.setItem('students', student);


    var records = localStorage.getItem("students");
    document.write(records);


}