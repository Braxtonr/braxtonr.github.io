//let person = new Object();

//let person = {};

let person = {
    firstName:"Amy",
    lastName:"Smith",
    age: 20,
    hobbies: ["reading", "learning","studying"],
}

console.log(person.firstName + " " + person.lastName);

//get a key from the user and display the value

let key = "firstName";
console.log(person[key]);
console.log(person["lastName"]);

//Loop through the keys in person and log them
for(key in person){
    console.log(key + ": " + person[key]);
}