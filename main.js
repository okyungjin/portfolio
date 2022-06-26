'use strict';

// Common
const scrollIntoViewBySelector = (selector) => {
  selector.scrollIntoView({ behavior: 'smooth' });
};


// Make Navbar transparent when current position is on top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
const makeNavbarTransparentWhenTop = () => {
  if (window.scrollY > navbarHeight)
    navbar.classList.add('navbar--dark');
  else
    navbar.classList.remove('navbar--dark');
}
document.addEventListener('scroll', makeNavbarTransparentWhenTop)


// Scroll to content when clicking navbar menu
const navbarMenu = document.querySelector('.navbar__menu');
const scrollToContent = (event) => {
  const link = event.target.dataset.link;
  if (!link) return;
  
  const elemToScroll = document.querySelector(link);
  scrollIntoViewBySelector(elemToScroll);
};
navbarMenu.addEventListener('click', scrollToContent);


// Scroll to contact when clicking contact button in home
const homeContanctBtn = document.querySelector('.home__contact');
const scrollToContactElem = () => {
  const contactElem = document.querySelector('#contact');
  scrollIntoViewBySelector(contactElem);
};
homeContanctBtn.addEventListener('click', scrollToContactElem);
