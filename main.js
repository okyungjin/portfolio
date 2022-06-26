'use strict';

const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

const makeNavbarTransparentWhenTop = () => {
  if (window.scrollY > navbarHeight)
    navbar.classList.add('navbar--dark');
  else
    navbar.classList.remove('navbar--dark');
}
document.addEventListener('scroll', makeNavbarTransparentWhenTop)

