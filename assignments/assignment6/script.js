"using script"
function CalcBeachBall() {
    const firstName =  document.getElementById("fName").value;
    const lastName = document.getElementById("lName").value;
    const prodName = document.getElementById("pName").value;
    const prodCount = document.getElementById("pCount").value;
    const prodPrice = document.getElementById("pPrice").value;
    const taxAmt = document.getElementById("taxAmt").value;
    const totalPrice = parseFloat(prodCount * prodPrice);
    const totalTax = parseFloat(totalPrice * taxAmt);
    const finalPrice = parseFloat(totalPrice + totalTax).toFixed(2);

    const printElem = document.getElementById("printAll");
    printElem.textContent = `${firstName} ${lastName} ordered ${prodCount} ${prodName}`;

    const endLine = document.getElementById("totalAmount");
    endLine.textContent = `${finalPrice}`
}

const btnresult = document.getElementById("totalsbtn");
btnresult.onclick = CalcBeachBall;