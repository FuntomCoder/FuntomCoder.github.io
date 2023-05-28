function dropdownClick() {
    var x = document.getElementById("dropdownItems");
    if(x.className === "topnav") {
        x.className += " responsive";
    }
    else{
        x.className = "topnav";
    }
}