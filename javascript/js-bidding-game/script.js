var initialCoinsEl = document.getElementById('initial-coins');
var initialCoins = 1000;
initialCoinsEl.innerHTML = initialCoins;

function playBiddingGame() {
    var bidAmount = +prompt("Enter Bid Amount");
    var bidNumber = +prompt("Enter Bid Number");
    let generatedNumber = generatedRandomNumber();
    var isMatched = matchNumbers(bidNumber, generatedNumber);
    showMessage(isMatched, bidAmount);

    console.log(bidAmount);
    console.log(bidNumber);
    console.log(generatedNumber);
    console.log(isMatched);
}


function generatedRandomNumber() {
    let generateNum = Math.ceil(Math.random() * 6);
    return generateNum;
}

function matchNumbers(bidNumber, generatedNumber) {
    let matched = false;
    if (bidNumber === generatedNumber) {
        matched = true;
    }

    return matched;
}


function showMessage(matched, bidAmount) {
    if (matched) {
        let userWin = initialCoins + bidAmount;
        initialCoinsEl.innerHTML = userWin;

    }

    else
    {
        
    }
}