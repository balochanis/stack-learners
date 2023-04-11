var englishMarksEl = document.getElementById('englishMarks');
var urduMarksEl = document.getElementById('urduMarks');
var mathMarksEl = document.getElementById('mathMarks');
var totalMarksEL = document.getElementById('totalMarks');
var obtainedMarksEl = document.getElementById('obtainedMarks');
var percentageEl = document.getElementById('percentage');
var gradeEl = document.getElementById('grade');
var remarksEl = document.getElementById('remarks');
var message = '';
var isValidate = false;






function validation()
{
    if(englishMarksEl.value > 100 || urduMarksEl.value > 100 || mathMarksEl.value > 100)
    {
        message = "Marks should not greater than 100";

    }

    else if(englishMarksEl.value < 0 || urduMarksEl.value < 0 || mathMarksEl.value < 0)
    {
        message = "Marks should not be lower than 0";
    }
    
}

function calculate()
{
    totalMarksEL.value = 300;
    var obtainedMarks = Number(englishMarksEl.value) + Number(urduMarksEl.value) + Number(mathMarksEl.value);
    obtainedMarksEl.value = obtainedMarks;
    var percentage = obtainedMarks /totalMarksEL.value * 100;
    percentageEl.value = percentage.toFixed(2);
}


function grade()
{
    if()
    {
        
    }
}
