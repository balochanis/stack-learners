var emailEl = document.getElementById('user-email');
var passEl = document.getElementById('user-pass');
var confirmPassEl = document.getElementById('confirm-user-pass');
var message;
function registerUser()
{
    var email = validateEmail();


}

function validateEmail()
{
    if(emailEl.value === "")
    {
        console.log("Please enter Email Address");
    }

    else if(emailEl.value.indexOf("@") === -1)
    {
        console.log("email is invalid");
    }

    else 
    {
        console.log("email is correct");
        isEmailValidated = true;
    }


}