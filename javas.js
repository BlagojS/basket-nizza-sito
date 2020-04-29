//--------------------------- scroll progress --------------------------------------------------------------

// When the user scrolls the page, execute myFunction
window.onscroll = function() {
    myProgressBarFunction()
};

function myProgressBarFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    var MyScrollBar = document.getElementById("myBar");
    var myButton = document.getElementById("myBtn");
    var mySocialBar = document.getElementById("social-bar");
    MyScrollBar.style.width = scrolled + "%";

    if (scrolled > 20) {
        myButton.style.display = "block";

        myButton.style.width = "40px";
        myButton.style.padding = "10px 5px";
    } else {
        myButton.style.display = "none";

        myButton.style.width = "0vw";
        myButton.style.padding = "0";
    }

    if (scrolled > 20 && scrolled < 95) {
        mySocialBar.style.width = "40px";
        mySocialBar.style.padding = "0 0";
        /*
        document.getElementsByClassName("social").style.display = "block"
        */
        mySocialBar.style.visibility = "visible";
    } else {
        mySocialBar.style.visibility = "hidden";
        mySocialBar.style.width = "0vw";
        mySocialBar.style.padding = "0";
        /*
        document.getElementsByClassName("social").style.display = "none"
        */

    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

//--------------------------- Navbar --------------------------------------------------------------
function myNavFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

//--------------------------- Dropdown --------------------------------------------------------------

/* When the user clicks on the button, toggle between hiding and showing the dropdown content */
function toggleDrpdwn() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function toggleDrpdwn1() {
    document.getElementById("Drpdwn1").classList.toggle("show");
}


function toggleDrpdwn2() {
    document.getElementById("Drpdwn2").classList.toggle("show");
}


function toggleDrpdwn3() {
    document.getElementById("Drpdwn3").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


//--------------------------- countdown --------------------------------------------------------------
/*

// Set the date we're counting down to
var countDownDate = new Date("04/22/2020 12:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);


    // Display the result in the element with id="demo"
    document.getElementById("demo").innerHTML = days + "d " + hours + "h " +
        minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);
 */


//--------------------------- slideshow --------------------------------------------------------------
var slideIndex = 1;
var timer = null;


function plusSlides(n) {
    clearTimeout(timer);
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    clearTimeout(timer);
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n == undefined) {
        n = ++slideIndex
    }
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active-dot", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active-dot";
    timer = setTimeout(showSlides, 6000);
}