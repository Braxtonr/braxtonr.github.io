"using strict"
function displayAscii(){
    let word = document.getElementById("the-word").value;
    word = word.trim();

    const ascii = document.getElementById("ascii-show");

    for(let i=0; i<word.length; i++)
    {
        ascii.innerHTML += word.charCodeAt(i);
        if(i < word.length-1)
        {
            ascii.innerHTML += ", ";
        }
    }
}

function showEven(){
    console.log("Displaying sum");
    const inputNumber = document.getElementById("the-num").value;
    let evenNum = document.getElementById("even-show");
    let sum = 0;
    for(let i=0; i<=inputNumber; i+=2)
    {
        sum = sum + i;
    }
    
    evenNum.innerHTML = "Sum: " + sum;
} 
window.onload = function(){
    const btnAscii = document.getElementById("ascii-btn");
    btnAscii.onclick = displayAscii;

    const btnEven = document.getElementById("even-btn");
    btnEven.onclick = this.showEven;
}