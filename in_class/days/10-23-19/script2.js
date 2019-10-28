let foods = {
    cheese: 3,
    banana: 2,
    oj: 5,
}

//Loop through and double all the items, then
//add them to the total
let total = 0;
for(key in foods){
    foods[key] *= 2;
    total += foods[key];
}

console.log("Total is: " +  total);