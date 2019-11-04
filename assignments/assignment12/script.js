async function displayMovies(){
    let response = await fetch("https://portiaportia.github.io/csce242/json/movies.json");
    let movieJSon = await response.json();
    let contentDiv = document.getElementById("content");
    let pageName = document.createElement("h2");
    pageName.innerHTML = "Movies";
    contentDiv.append(pageName);
    for(i in movieJSon){
        let movie = movieJSon[i];
        contentDiv.append(getMovie(movie));
    } 
}

function getMovie(movie){
    let movieSection = document.createElement("section");
    movieSection.className = "movies";
    let movieImg = document.createElement("div");
    movieImg.className = "movie-content";
    movieSection.append(movieImg);
    let movieDes = document.createElement("div");
    movieDes.className = "movie-content";
    movieSection.append(movieDes);
    
    let movieName = document.createElement("h3");
    movieName.innerText = movie.title;
    movieImg.append(createImg("https://portiaportia.github.io/csce242/json/"+movie.img));
    movieDes.append(movieName);
    movieDes.append(createList("<strong>" + "Director: " + "</strong>" + movie.director));
    movieDes.append(createList("<strong>" + "Actors: " + "</strong>" + movie.actors + " "));
    movieDes.append(createList("<strong>" + "Year: " + "</strong>" + movie.year + " "));
    movieDes.append(createList("<strong>" + "Genres: " + "</strong>" + movie.genres + " "));
    movieDes.append(createPara(movie.description));
    return movieSection;
}

function createList(text){
    let ulElem = document.createElement("ul");
    let liElem = document.createElement("li");
    liElem.innerHTML = text;
    ulElem.append(liElem);
    return ulElem;
}

function createPara(text){
    let movieP = document.createElement("p");
    movieP.innerHTML = text;
    return movieP;
}

function createImg(path){
    let movImg = document.createElement("img");
    movImg.src = path;

    return movImg;
}
window.onload = function(){
    this.displayMovies();
}