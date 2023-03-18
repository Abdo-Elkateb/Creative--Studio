


var main = document.getElementById("nav__main")

window.onscroll = function() {
    if(scrollY > 200) {
        main.classList.add("nav_fixed")
        scroll
    } else {
        main.classList.remove("nav_fixed")
    }

}

