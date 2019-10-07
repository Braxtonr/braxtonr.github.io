function displayCount(){
    // While loop from 1 to 10 and display the numbers in the console

    ulElem = document.createElement("ul");
    contentElem = document.getElementById("content");
    contentElem.append(ulElem);

    let count = 1;
    //create list element
    //append list element to ul element
    while(count <= 10)
    {
        //create list element
        liElem = document.createElement("li");
        liElem.innerText = count;
        //append list element to ul
        ulElem.append(liElem);
        console.log(`${count}`);
        count++;
    }
}

function displayLinks(){
    let linksElem = document.getElementById("links");
    for(let i=1; i<=10; i++)
    {
        aElem = document.createElement("a");
        linksElem.append(aElem);
        aElem.innerHTML = `Page${i}`;
        aElem.href = `#${i}`;
        console.log(i);
    }
}

function displayTimesTable(){
    //insert table after button
    let tableElem = document.createElement("table");
    this.after(tableElem);

    //loop through and create the rows
    for(let row=1; row<=10; row++)
    {
        rowElem = document.createElement("tr");
        tableElem.append(rowElem);
        for(let col=1; col<=10; col++)
        {
            let colElem = document.createElement("td");
            tableElem.append(colElem);
            colElem.innerHTML = row*col;
                
        }
    }
}

window.onload = function(){
    this.displayCount();
    this.displayLinks();

    let multBtn = document.getElementById("mult-btn");
    multBtn.onclick = displayTimesTable;
}