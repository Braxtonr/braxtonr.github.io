//alert("hello world");

// const userName = prompt("Enter your name");

// const myP = document.getElementById("target");
// myP.innerHTML = "HI ME!";

// const item1Li = document.getElementById("lbj");
// const item2Li = document.getElementById("kd");
// const item3Li = document.getElementById("kawhi");

// item1Li.innerHTML = "Lebron";
// item2Li.innerHTML = "KD";
// item3Li.innerHTML = "Kawhi";
alert("Enter your top 3 basketball players");
top1 = prompt("Enter your #1");
top2 = prompt("Enter your #2");
top3 = prompt("Enter your #3");

let resultP = document.getElementById("result");
resultP.innerHTML = "My top 3 basketball players are " + top1 + ", " + top2 + ", "+ top3;