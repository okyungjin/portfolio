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


// Make home slowly fade to transparent as the window scrolls down
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});


// Show arrow up button when scrolling down
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
  if (window.scrollY > homeHeight / 2)
    arrowUp.classList.add('visible');
  else
    arrowUp.classList.remove('visible');
});
arrowUp.addEventListener('click', () => { scrollIntoViewBySelector(home) });


// Filter projects
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');

workBtnContainer.addEventListener('click', (event) => {
  const filter = event.target.dataset.filter || event.target.parentNode.dataset.filter;
  if (!filter) return;

  projectContainer.classList.add('animation-out');

  const ALL_PROJECTS = '*';
  setTimeout(() => {
    projects.forEach(project => {
      if (filter === ALL_PROJECTS || filter === project.dataset.type)
        project.classList.remove('invisible');
      else
        project.classList.add('invisible');
    });
    
    projectContainer.classList.remove('animation-out');
  }, 300);
});