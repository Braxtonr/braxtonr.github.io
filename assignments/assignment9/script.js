"using strict"
function displayQuotes() {
    let quoteArr = ["You have to be able to accept failure to get better. -LeBron James",
    "Hard work beats talent when talent fails to work hard. -Kevin Durant",
    "You must have confidence in your competenece. -Elijah Cummings",
    "Don't count the days, make the days count. -Muhammad Ali",
    "If you don't like something, change it. If you can't change it, change your attitude. -Maya Angelou"];

    let pQuote = document.getElementById("quote-sec");
    pQuote.innerHTML = quoteArr[0];
}

function changeQuote(){
    for(let i=; i<quoteArr.length; i++)
    {
        pQuote.innerHTML = quoteArr[i];
        if(i == quoteArr.length)
        {
            i = 0;
        }
    }
}
function displayLotto() {

}

window.onload = function() {
    displayQuotes();
    let lottoBtn = document.getElementById("win-btn");
    lottoBtn.onclick = displayLotto;

}