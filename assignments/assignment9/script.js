"using strict"

    let quoteArr = ["You have to be able to accept failure to get better. -LeBron James",
    "Hard work beats talent when talent fails to work hard. -Kevin Durant",
    "You must have confidence in your competenece. -Elijah Cummings",
    "Don't count the days, make the days count. -Muhammad Ali",
    "If you don't like something, change it. If you can't change it, change your attitude. -Maya Angelou"];
    let count = 1;
    let pQuote = document.getElementById("quote-sec");
    pQuote.innerHTML = quoteArr[0];

function displayQuotes() {
    pQuote.innerHTML = quoteArr[count];
    count++;
    if(count == quoteArr.length)
    {
        count = 0;
    }
}


function displayLotto() {

    let hitsArr = new Array(5);

    for(let i=0; i < hitsArr.length; i++)
    {
        hitsArr[i] = Math.floor(Math.random() * 10) + 1; 
    }

    let hitNum = document.createElement("p");
    this.before(hitNum);

     for(let i = 0; i < hitsArr.length; i++)
    {
         hitNum.innerHTML += hitsArr[i];
    }

    let userNums = document.getElementsByClassName("lotto-num");

    let isMatch = document.getElementsByClassName("match");

    for(let j = 0; j < userNums.length; j++)
    {
        if(userNums[j].value == hitsArr[j])
        {
            isMatch[j].innerText = "Match";
        }
        else {
            isMatch[j].innerText = "Not a match";
        }
    }

    let finalAns = document.createElement("p");
    this.after(finalAns);

    if(userNums == hitsArr)
    {
        finalAns.innerText = "You Won!"
    }
    else{
        finalAns.innerText = "Better Luck Next Time!"
    }

}

window.onload = function() {
    this.setInterval(displayQuotes, 2000);
    let lottoBtn = document.getElementById("win-btn");
    lottoBtn.onclick = displayLotto;

}