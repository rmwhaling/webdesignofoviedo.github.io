// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Hamburger Menu //

const navEl = document.querySelector(`.nav`);
const hamburgerEl = document.querySelector(`.hamburger`);

hamburgerEl.addEventListener(`click`, () => {
  navEl.classList.toggle(`nav--open`);
  hamburgerEl.classList.toggle(`hamburger--open`);
})

navEl.addEventListener(`click`, () => {
  navEl.classList.remove(`nav--open`);
  hamburgerEl.classList.remove(`hamburger--open`);
})
