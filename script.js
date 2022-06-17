function displayproducts() {
    document.getElementsByClassName("products")[0].style.display = "flex";
    document.getElementsByClassName("brands")[0].style.display = "none";
    document.getElementsByClassName("guides")[0].style.display = "none";
}

function displaybrands() {
    document.getElementsByClassName("products")[0].style.display = "none";
    document.getElementsByClassName("brands")[0].style.display = "flex";
    document.getElementsByClassName("guides")[0].style.display = "none";
}

function displayguides() {
    document.getElementsByClassName("products")[0].style.display = "none";
    document.getElementsByClassName("brands")[0].style.display = "none";
    document.getElementsByClassName("guides")[0].style.display = "flex";
}

