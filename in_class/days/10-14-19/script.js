"using strict"

function showFoods(){
    let foods = ["popcorn", "cherries", "tomatoes", "lettuce"];
    let ulElem = document.createElement("ul");
    this.after(ulElem);

    for (let i = 0; i < foods.length; i++)
    {
        liElem = document.createElement("li");
        liElem.innerText = foods[i];
        ulElem.append(liElem);
    }

    // for (let item of foods){
    //     let li = document.createElement("li");
    //     ulElem.append(li);
    //     li.innerText = item;
    // }
}

function getFoods(){
    let foodsPs = document.getElementsByClassName("p");
    let allFoods = document.createElement("p");
    this.after(allFoods);
    allFoods.innerHTML = ("I like ");

    for(let foodElem of foodsPs){
        allFoods.innerHTML += foodElem.innerHTML + " ";
    }
}

function randNumber(){
    let num = Math.floor(Math.random()*10+1);
    let pElem = document.createElement("p");
    this.after(pElem);
    pElem.append(num);
}

window.onload = function(){
    let foodBtn = document.getElementById("food-btn");
    foodBtn.onclick = showFoods;

    let listBtn = document.getElementById("list-btn");
    listBtn.onclick = getFoods;

    let randBtn = document.getElementById("rand-btn");
    randBtn.onclick = randNumber;
}