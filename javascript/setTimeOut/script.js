// var bgEl = document.getElementById('body');
// var colors = ["green", "blue", "purple", "yellow"];
// var numElements = colors.length;
// var num = 0;

// function myFunction()
// {
//     bgEl.style.backgroundColor = colors[num];
//     num++
//     if(num >= numElements)
//     {
//         clearInterval(consoleTimer);
//         bgEl.style.backgroundColor = "white";
//     }
//     console.log(num);
    
    
// }
// var consoleTimer = setInterval(myFunction,1000);





// var countDownEl = document.getElementById('countDownTimer');
// var i = 5;

// function stopTimer()
// {
//     countDownEl.innerHTML = i--;
//     if(i < 1)
//     {
//         clearInterval(myTimer);
//         countDownEl.innerHTML = "The End";
//     }
// }
// var myTimer = setInterval(stopTimer,1000);






// var minutesEl = document.getElementById('minutes');
// var secondsEl = document.getElementById('seconds');

// var minutes =  5;
// var seconds = 60;
// function updateTime()
// {

//     minutesEl.innerHTML = minutes;
//     secondsEl.innerHTML = seconds;
//     seconds--;

//     if(seconds < 0 && minutes > 0)
//     {
//         minutes--;
//         seconds = 59;
//     }

//     else if(seconds < 0 && minutes ==  0)
//     {
//         clearInterval(stopTimer);
//     }

// }


// var stopTimer = setInterval(updateTime,25);



var boxEl = document.getElementById("box");
var red = 0;
var green = 0;
var blue = 0;
function colorWheel()
{

    boxEl.style.background = "rgb("+ red + "," + green + "," + blue +")";
    red++;
    if(red = 255)
    {
        clearInterval(colorTimer);
    }

}


var colorTimer = setInterval(colorWheel,100);