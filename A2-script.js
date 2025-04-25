
// COLLAPSIBLE TEXT SECTION
// -----------------------------------------
// !!!!! Code tutorial source 01: https://www.w3schools.com/howto/howto_js_accordion.asp

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {

    // Add/remove "active" class, highlights the button that controls the panel
    this.classList.toggle("active");

    // To toggle between hiding and showing the active panel
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

// Animating the Accordian
    var accordian = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < accordian.length; i++) {
            accordian[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        }
        else {panel.style.maxHeight = panel.scrollHeight + "px";}
            });
    }

// !!!!! End of source code 01
// -----------------------------------------

// GALLERY SECTION
// ----------------------------------------------------------------------------------------------
// !!!!! Code tutorial source 02: https://www.w3schools.com/howto/howto_js_slideshow_gallery.asp 

let slideIndex = 1;
showSlides(slideIndex);

//next/prev controls
function plusSlides(x) {
    showSlides(slideIndex += x);
}

// Controllong the thumbnail images
function currentSlide(x) {
    showSlides(slideIndex = x);
}

function showSlides(x) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");

    if (x > slides.length) {slideIndex = 1}
    if (x < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
}
/* !!!!! End of source code 02 */
// ----------------------------------------------------------------------------------------------