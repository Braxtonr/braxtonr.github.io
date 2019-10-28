"using strict"

class Book {
    constructor(img, name, author, genre, year, rating) 
    {
        this._img = img;
        this._name = name;
        this._author = author;
        this._genre = genre;
        this._year = year;
        this._rating = rating;
    }

    getImg(){
        return this._img;
    }
    getName(){
        return this._name;
    }
    getAuthor(){
        return this._name;
    }
    getGenre(){
        return this._genre;
    }
    getYear(){
        return this._year;
    }
    getRating(){
        return this._rating;
    }
    setName(name){
        this._name = name;
    }
    setAuthor(author){
        this._author = author;
    }
    setGenre(genre){
        this._genre = genre;
    }
    setYear(year){
        this._year = year;
    }
    setRating(rating){
        this._rating = rating;
    }

    getBookRow(){
        let secElem = document.createElement("section");
        let imgElem = document.createElement("img");
        let pElem = document.createElement("p");
        imgElem.src = this._img;
        pElem.innerHTML = "<b>" + this._name + "</b>" + " by " + this._author + ". Genre: " + this._genre +
        ". Written: " + this._year + ". Rated: " + this._rating;
        secElem.append(imgElem);
        secElem.append(pElem);

        return secElem;
    }
}
let headElem = document.createElement("h1");
headElem.innerHTML = "Books";
let contentDiv = document.getElementById("content");
bookArr = [];
bookArr.push(new Book("images/cWeb.jpg","Charlotte's Web", "E.B. White", "Children's Literature", 1952, 4));
bookArr.push(new Book("images/fahrenheit451.jpg","Fahrenheit 451", "Ray Bradbury", "Utopian and Dystopian Fiction", 1953, 2));
bookArr.push(new Book("images/green-eggs.jpg","Green Eggs and Ham", "Dr. Seuss", "Children's Literature", 1960 , 5));
bookArr.push(new Book("images/harryPot.jpg","Harry Potter and the Deathly Hallows", "JK Rowling", "Young Adult Fiction", 2007, 4));
bookArr.push(new Book("images/hunger-games.jpg","The Hunger Games", "Suzanne Collins", "Utopian and Dystopian Fiction", 2008, 5));

contentDiv.append(headElem);
for (i of bookArr) {
    contentDiv.append(i.getBookRow());
}
