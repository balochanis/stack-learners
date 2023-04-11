var emailEl = document.getElementById('email');
var passwordEl = document.getElementById('password');
var auth = firebase.auth();
function registerUser()
{
    console.log(emailEl.value, passwordEl.value);
    auth.createUserWithEmailAndPassword(emailEl.value, passwordEl.value).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });


     
}


function signIn()
{

  auth.signInWithEmailAndPassword(emailEl.value, passwordEl.value).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  });
}