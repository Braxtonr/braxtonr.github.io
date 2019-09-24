"using strict"
function showGift(){
    const resultElem = document.getElementById("answer");
    resultElem.innerHTML = "<strong>No I'm Broke!</strong>";
    let present = document.getElementById("gift").value;
    present = present.toLowerCase().trim();

    // if(present === "money")
    // {
    //     resultElem.innerHTML = "I love money"
    // }
    // else
    // {
    //     resultElem.innerHTML = "Eh..."
    // }

    switch (present){
        case "money":
            resultElem.innerHTML = "I love money";
            break;
        case "car":
            resultElem.innerHTML = "OOO a car!";
            break;
        default:
            resultElem.innerHTML = "Eh....";
    }

    console.log("Showing a Gift");
}

window.onload = function(){
    const btnDisplay = document.getElementById("btn-display");
    btnDisplay.onclick = this.showGift;
}