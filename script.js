const sections = document.querySelectorAll('section'); // select each section (page)
const navBtns = document.querySelectorAll('nav-list'); // select parent container of buttons
const navItemBtn = document.querySelectorAll('.menu-item-container'); // select each individual buttons
const allSections = document.querySelector('.main-content') // select all sections in webpage
const toggle = document.querySelector('.menu-toggle'); 
var navbars = document.querySelectorAll('.navbar');

// Sections Active

// "target" refers to element where the event occured & "dataset" refers to data-id element 
/*
function PageTransitions() {
  allSections.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    if (id) {

      // Removes the "active" class from all buttons in the sectBtns array using the forEach method.
      navBtns.forEach((btn) => {
        btn.classList.remove('active')
      });

      // Adds the "active" class to the clicked button using e.target.classList.add('active').
      e.target.classList.add('active');

      // Removes the "active" class from all sections in the sections array using the forEach method.
      sections.forEach((section) => {
        section.classList.remove('active')
      });

      // Adds the "active" class to the section with the corresponding id using 
      // document.getElementById(id).classList.add('active').
      const element = document.getElementById(id);
      element.classList.add('active');

      // Scroll to the active class on click
      element.scrollIntoView({ behavior: "smooth" });

    }
  })
};

PageTransitions();*/

var hideScroll = window.scrollY;

window.onscroll = function() {
  var currentScrollPos = window.scrollY;
  const checked = document.getElementById("nav-toggle").checked;
  
  navbars.forEach((nav) => {
    if(nav.style.display != "none"){
      if (hideScroll > window.scrollY && checked == false) {
        nav.style.top = "0";
      } 
      else {
        if(checked == false){
          nav.style.top = "-10rem";
        }
      }
    }
  })

  hideScroll = currentScrollPos;
};