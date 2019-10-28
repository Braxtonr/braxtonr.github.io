/*async function special() {
    console.log("In Special Beginning");
    let result = await setTimeout(doStuff, 2000);
    console.log("In Special Ending");
}

function doStuff(){
    console.log("In do stuff");
}
window.onload = function(){
    this.console.log("Before calling special");
    this.special();
    this.console.log("After calling special");
}*/

async function displayShoe(){
    let response = await fetch("https://braxtonr.github.io/in_class/days/10-28-19/shoe.json");
    let shoeJSon = await response.json();
    let shoeName = shoeJSon.name;
    let shoeBrand = shoeJSon.brand;
    let reviews = shoeJSon.comments;
    console.log(`${shoeName} by ${shoeBrand}`);
 
    for(i in reviews) {
        console.log(reviews[i]);
    }

    let section = document.createElement("section");
    section.innerHTML = (`${shoeName} by ${shoeBrand}`);
    let content = document.getElementById("content");
    content.append(section);

}

window.onload = function(){
    this.displayShoe();

    let content  = document.getElementById("content");
    let h1 = document.createElement("h1");
    h1.innerHTML = "I love your shoes";
    content.append(h1);
}