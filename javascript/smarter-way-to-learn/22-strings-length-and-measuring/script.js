var myText = "anis";
var firstChar = myText.slice(1);
// console.log (firstChar);
// console.log(myText);


var str = "Enter some    text";
var numChars = str.length;
for (var i = 0; i < numChars; i++) {
if (str.slice(i, i + 2) === " ") {
alert("No double spaces!");
break;

}
}