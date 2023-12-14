//Navigation bar effects on scroll
window.addEventListener('scroll',function(){
    const header =document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY>0);
})
//Portfolio section -model
const portfoliomodels = document.getElementsByClassName("portfolio-model");
const imgcard = document.getElementsByClassName("img-card");
const portfolioclosebtns = document.getElementsByClassName("portfolio-close-btn");

let portfoliomodel = function (modelClick) {
    portfoliomodels[modelClick].classList.add("active");
};

Array.from(imgcard).forEach((imgcards, i) => {
    imgcards.addEventListener("click", () => {
        portfoliomodel(i);
    });
});

document.body.addEventListener("click", (event) => {
    if (event.target.classList.contains("portfolio-close-btn")) {
        [...portfoliomodels].forEach((portfolioModelView) => {
            portfolioModelView.classList.remove("active");
        });
    }
});
//Website Dark/Light Theme
const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    themeBtn.classList.toggle('sun');

    localStorage.setItem('saved-theme', getCurrentTheme());
    localStorage.setItem('saved-icon', getCurrentIcon());
});

function getCurrentTheme() {
    return document.body.classList.contains('dark-theme') ? 'dark' : 'light';
}

function getCurrentIcon() {
    return document.querySelector('.fa').classList.contains('fa-sun') ? 'sun' : 'moon';
}
const savedTheme = localStorage.getItem('saved-theme');
const savedIcon = localStorage.getItem('saved-icon');

if (savedTheme) {
    document.body.classList[savedTheme === 'dark' ? 'add' : 'remove']('dark-theme');
}

if (savedIcon) {
    document.querySelector('.fa').classList[savedIcon === 'sun' ? 'add' : 'remove']('fa-sun');
}

//Scroll to top button

const scrolltopBtn = document.querySelector('.scrolltotop-btn');

window.addEventListener('scroll', function() {
    scrolltopBtn.classList.toggle('active', window.scrollY > 500);
});

scrolltopBtn.addEventListener('click', function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

//Navigation menu items active on page scroll
document.addEventListener("DOMContentLoaded", function () {

    const navLinks = document.querySelectorAll(".nav-items a");

    function updateActiveLink() {
        const scrollPosition = window.scrollY;

        navLinks.forEach((link) => {
            const section = document.querySelector(link.getAttribute("href"));
            if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    }
    window.addEventListener("scroll", updateActiveLink);
    updateActiveLink();
});
//Responsive navigation menu toggle
const menuBtn=document.querySelector('.hamburger');
const closeBtn=document.querySelector('.cross');
const Navigation=document.querySelector('.navigation');
const navitems=document.querySelector('.nav-items');

menuBtn.addEventListener("click",()=>{
    Navigation.classList.add("active")
})
closeBtn.addEventListener("click",()=>{
    Navigation.classList.remove("active")
})
    navitems.addEventListener("click",()=>{
    Navigation.classList.remove("active")
});




//Scroll reveal animation
//common reveal options to create reveal animations
ScrollReveal({
    reset: true,
    distance:'60px',
    duration: 1500,
    delay:100
});
// Target elements,and specify options to create reveal animations
ScrollReveal().reveal('.home .info h2, .section-title-1,.section-title-2',{delay:400,origin:'left'});
ScrollReveal().reveal('.home .info h3, .home .info p,about-info .btn',{delay:500,origin:'right'});
ScrollReveal().reveal('.home .info .btn',{delay:600,origin:'left'});
ScrollReveal().reveal('.media-icons i',{delay:700,origin:'left',interval:200});
ScrollReveal().reveal('.home-img,.about-img',{delay:400,origin:'bottom'});
ScrollReveal().reveal('.about .description',{delay:500,origin:'right'});
ScrollReveal().reveal('.skills-content .skills-name',{delay:400,origin:'right',interval:200});
ScrollReveal().reveal('.qualification-data li',{delay:300,origin:'right',interval:200});
ScrollReveal().reveal('.footer-container .group',{delay:300,origin:'top',interval:200});