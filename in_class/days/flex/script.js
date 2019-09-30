"using strict"

function toggleNav(){
    console.log("toggling");
    const navItems = document.getElementById("navitems");
    navItems.classList.toggle("hidden");
}

function togglePara(){
    const moreInfo = document.getElementById("more-info");
    moreInfo.hidden = !moreInfo.hidden;

    return false; // don't do defualt behavior
}

function validateFirstName(){
    //if the error is showing, remove it
    let errorSpan = document.getElementById("error-first-name");
    
    if(errorSpan != null) {
        errorSpan.remove();
    }

    //show an error when value is blank
    if(this.value.trim() == "") {
        errorSpan = document.createElement("span");
        errorSpan.id = "error-first-name";
        errorSpan.innerHTML = "* Blank";
        errorSpan.classList.add("error");
        this.after(errorSpan);
    }
}
window.onload = function(){
    const hamburger = document.getElementById("hamburger");
    hamburger.onclick = toggleNav;

    //hide more info paragraph on page load
    const moreInfo = document.getElementById("more-info");
    moreInfo.hidden = true;

    const expandLink = document.getElementById("expand-link");
    expandLink.onclick = togglePara;

    const fNameText = document.getElementById("inp-first-name");
    fNameText.addEventListener("keyup", validateFirstName);
}