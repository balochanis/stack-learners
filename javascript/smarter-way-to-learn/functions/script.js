// var cityName = prompt("Enter your city", "kaachi");

// function guessCity(city)
// {
//     var found = false;
//     var message;
//     if(city === "karachi")
//     {
//         found = true;
//     }


//     if(found)
//     {
//         message = " found in the list";
//     }

//     else
//     {
//         message = " not found in the list";
//     }

//     return message;
// }
// console.log(guessCity(cityName));


function gender(userGender)
{
    var message;
    if(userGender === "male")
    {
        message = "Welcome Sir";
    }
    else if(userGender === "female")
    {
        message = "Welcome Madam";
    }

    else
    {
        message = "User response not found";
    }



    return message;
}


var gender = document.getElementById('genderResult');
gender.innerHTML = "Female";


