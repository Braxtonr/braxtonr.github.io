"using strict"

function orderNames() {
    const name1 = document.getElementById("name1").value;
    const name2 = document.getElementById("name2").value;
    const name3 = document.getElementById("name3").value;
    const age1 = document.getElementById("age1").value;
    const age2 = document.getElementById("age2").value;
    const age3 = document.getElementById("age3").value;

    let allPeeps = [
        allPeeps[0] = {wName: name1, age: age1},
        allPeeps[1] = {wName: name2, age: age2},
        allPeeps[2] = {wName: name3, age: age3}];
    if(allPeeps != null)
    {
        
    }



    const orderedAges = document.getElementById("orderedNames");
    orderedAges.innerText = allAges[0] + allAges[1] + allAges[2];
    
}

function sayHello(){
    const language = document.getElementById("lang").value;
    if(language.trim() == "spanish")
    {
        const sayIt = document.getElementById("say-hello");
        sayIt.innerText = "Hola"
    }
    else if(language.trim() == "french")
    {
        const sayIt = document.getElementById("say-hello");
        sayIt.textContent = `Bonjour`;
    }
    else if(language.trim() == "german")
    {
        const sayIt = document.getElementById("say-hello");
        sayIt.textContent = `Hallo`;
    }
    else if(language.trim() == "japanese")
    {
        const sayIt = document.getElementById("say-hello");
        sayIt.textContent = `Kon'nichiwa`;
    }
}

function pluralizeWord(){
    const numItems = document.getElementById("numItem").value;
    const itemName = document.getElementById("itemName").value;

    if(numItems > 1)
    {
        const pluralize = document.getElementById("plural");
        pluralize.textContent = `You ordered ${numItems} ${itemName}s`;
    }
    else if (numItems == 1)
    {
        const pluralize = document.getElementById("plural");
        pluralize.textContent = `You ordered ${numItems} ${itemName}`;
    }
    else
    {
        const pluralize = document.getElementById("plural");
        pluralize.innerHTML = "Error, negative item number!";
    }
}

const helloButton = document.getElementById("hello-btn");
helloButton.onclick = sayHello;

const pluralButton = document.getElementById("addS");
pluralButton.onclick = pluralizeWord;

const compButton = document.getElementById("compAges");
compButton.onclick = orderNames;