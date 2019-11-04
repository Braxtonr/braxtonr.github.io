async function displayBreweries(){
    let response = await fetch("https://api.openbrewerydb.org/breweries");
    let breweryJSon = await response.json();
    let contentDiv = document.getElementById("content");

    for(i in breweryJSon){
        let brewery = breweryJSon[i];
        contentDiv.append(getBrewery(brewery));
    }
}

function getBrewery(brewery) {
    let brewSection = document.createElement("section");
    brewSection.className = "brewery";
    let breweryName = document.createElement("h3");
    breweryName.innerText = brewery.name;
    brewSection.append(breweryName);
    brewSection.append(createPara(brewery.street));
    brewSection.append(createPara(brewery.city + ", " + brewery.state));
    brewSection.append(makeLink(brewery.website_url));

    return brewSection;
}

function makeLink(link){
    let addLink = document.createElement("a");
    addLink.href = link;
    addLink.innerHTML = link;
    return addLink;
}
function createPara(text){
    let addPara = document.createElement("p");
    addPara.innerHTML = text;

    return addPara;
}

window.onload = function(){
    this.displayBreweries();
}
