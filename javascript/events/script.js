// var imgSrcEl = document.getElementById('img');
// var fontSizeEl = document.getElementById('fontSize');
// var sample = document.getElementById('paraSample');
// var provinceEl = document.getElementById('province');
// var errorMsgEl = document.getElementById('errorMsg');


// function changeImg()
// {
//     imgSrcEl.src = "bike2.jpg";
// }


// function mouseOver(el)
// {
//     el.src = "bike2.jpg";
// }

// function mouseOut(el)
// {
//     el.src = "bike1.jpg";
// }

// function changeStyle(el)
// {
//     el.style.background = "purple";
//     el.style.textAlign = "right";
// }

// function updatePara(el)
// {
//     sample.style.fontSize = fontSizeEl.value + "px";
//     sample.style.color = "white";
//     sample.style.backgroundColor = "purple";
// }

// function changeStyle(el)
// {
//     el.style.color = 'green';
//     el.style.fontWeight = "bold";
// }


// function resetStyle(el)
// {
//     el.style.color = "black";
//     el.style.fontWeight = "normal";
// }



function showPassword(el)
{
    el.type= "text";
}

function hidePassword(el)
{
    el.type = "password";
}


// function findProvince(el)
// {
//     if(el.value.toLowerCase() === "karachi")
//     {
//         provinceEl.value = "Sindh";
//     }

//     else if(el.value.toLowerCase() === "lahore")
//     {
//         provinceEl.value = "Punjab";
//     }

//     else
//     {
//         errorMsgEl.innerHTML = "City Not found in our list";
//     }
// }


function addClasses(el)
{
    el.classList.add("beautiful");
}