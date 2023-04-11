var firstASync = new Promise(function (resolve, reject)
{
    setTimeout(function ()
    {
        var randomNumber = Math.ceil(Math.random() * 6)
        console.log("inside set timeout");
        resolve();
    },3000)
});


firstASync
    .then(function()
        {
            console.log("first promise worked fine");
        })
    .catch(function (error)
    {
        console.error("error is " + error);
    })