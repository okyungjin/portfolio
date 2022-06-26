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


const navbarMenu = document.querySelector('.navbar__menu');
const scrollToContent = (event) => {
  const link = event.target.dataset.link;
  if (!link) return;
  
  const elemToScroll = document.querySelector(link);
  elemToScroll.scrollIntoView({ behavior: 'smooth' });
};
navbarMenu.addEventListener('click', scrollToContent);


