'use strict';

const navbar = document.querySelector('#navbar');
const navbarMenu = document.querySelector('.navbar__menu');
const navbarMenuItem = document.querySelectorAll('.navbar__menu__item');
const homeSection = document.querySelector('.home__containner');
const aboutSection = document.querySelector('#about');
const skillSection = document.querySelector('#skills');
const workSection = document.querySelector('#work');
const testimonialSection = document.querySelector('#testimonials');
const contactSection = document.querySelector('#contact');
const arrowBtn = document.querySelector('.arrow-btn');

const contactBtn = document.querySelector('.home__contact');

const title = document.querySelector('.home__title');
const description = document.querySelector('.home__description');
const homeHeight = homeSection.getBoundingClientRect().height;

const workCategories = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work_projects');
const projects = document.querySelectorAll('.project');

const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');

navbarToggleBtn.addEventListener('click', () => {
    if(navbar.className.includes('show') && navbarMenu.className.includes('show')) {
        console.log('remove:', navbar.classList);
        navbar.classList.remove('show');
        navbarMenu.classList.remove('show');
    } else {
        navbar.classList.add('show');
        navbarMenu.classList.add('show');
    }
})

workCategories.addEventListener('click', (event) => {
    const btnDatasetId = event.target.dataset.id || event.target.parentNode.dataset.id;

    const active = document.querySelector('.category__btn.active');
    active.classList.remove('active');

    const target = event.target.nodeName === "BUTTON" ? event.target : event.target.parentNode;
    target.classList.add('active');

    projectContainer.classList.add('anim-out');

    setTimeout(() => {
        projects.forEach((project) => {
            if(btnDatasetId === 'all' || btnDatasetId === project.dataset.id) {
                project.classList.remove('invisible');
            } else {
                project.classList.add('invisible');
            }
        })
        projectContainer.classList.remove('anim-out');
    }, 300)
})

window.addEventListener('scroll', () => {
    if(window.pageYOffset >= navbar.clientHeight) {
        navbar.style.backgroundColor = "#fe918d";
    } else {
        navbar.style.backgroundColor = "transparent";
    }
})

document.addEventListener('scroll', ()=> {
    homeSection.style.opacity = 1 - window.scrollY / homeHeight;
    if(window.scrollY >= homeHeight / 2) {
        arrowBtn.style.opacity = '1';
        arrowBtn.style.pointerEvents = 'all';
    } else {
        arrowBtn.style.opacity = '0';
        arrowBtn.style.pointerEvents = 'none';
    }
})

arrowBtn.addEventListener('click', () => {
    scrollToElement(navbar.offsetTop);
})

navbarMenuItem.forEach((el) => {
    el.addEventListener('click', () => {
        if(el.innerHTML === "Home") {
            scrollToElement(homeSection.offsetTop)
        } else if(el.innerHTML === "About") {
            scrollToElement(aboutSection.offsetTop)
        } else if(el.innerHTML === "Skills") {
            scrollToElement(skillSection.offsetTop)
        } else if(el.innerHTML === "My work") {
            scrollToElement(workSection.offsetTop)
        } else if(el.innerHTML === "Testimonials") {
            scrollToElement(testimonialSection.offsetTop)
        } else if(el.innerHTML === "Contact") {
            scrollToElement(contactSection.offsetTop)
        }
    })
})

function filterProject(btnDatasetId, elementDatasetId, element) {
    if(btnDatasetId !== elementDatasetId) {
        element.style.display = 'none';
    } else {
        element.style.display = 'block';
    }
}

function showProject(filterrBtnId, datasetId) {
    console.log(filterrBtnId.dataset.id);
    console.log(homeHeight);
}

function scrollToElement(elementOffset) {
    window.scrollTo({ top: elementOffset, left: 0, behavior: 'smooth' })
}