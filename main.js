'use strict';

const scrollIntoViewBySelector = (selector) => {
  selector.scrollIntoView({ behavior: 'smooth' });
};


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
  scrollIntoViewBySelector(elemToScroll);
};
navbarMenu.addEventListener('click', scrollToContent);


const homeContanctBtn = document.querySelector('.home__contact');
const scrollToContactElem = () => {
  const contactElem = document.querySelector('#contact');
  scrollIntoViewBySelector(contactElem);
};
homeContanctBtn.addEventListener('click', scrollToContactElem);
