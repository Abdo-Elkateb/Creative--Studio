


var main = document.getElementById("nav__main")

window.onscroll = function() {
    if(scrollY > 150) {
        main.classList.add("nav_fixed")
        scroll
    } else {
        main.classList.remove("nav_fixed")
    }

}

// ASO 
AOS.init({
    duration:1500
})