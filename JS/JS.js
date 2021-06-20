var D = new Date();
var Y = D.getFullYear();
document.getElementById('an').innerHTML = "Anul actualizarii preturilor:" + Y;

function mobileMenu() {
    var x = document.getElementById("navbar");
    if (x.className === "nav") {
        x.className += " mobile";
    } else {
        x.className = "nav";
    }
}