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
console.log('Script loaded');

const scrolltopBtn = document.querySelector('.scrolltotop-btn');

window.addEventListener('scroll', function() {
    console.log('Scroll event triggered');
    scrolltopBtn.classList.toggle('active', window.scrollY > 500);
});

scrolltopBtn.addEventListener('click', function() {
    console.log('Button clicked');
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
//const menuBtn=document.querySelector('.nav-menu-btn');
//const closeBtn=document.querySelector('.nav-close-btn');
//const Navigation=document.querySelector('.navigation');
//document.addEventListener('click', (event) => {
//    if (event.target.classList.contains('nav-menu-btn')) {
//        Navigation.classList.add('active');
//    } else if (event.target.classList.contains('nav-close-btn')) {
//        Navigation.classList.remove('active');
//    }
//});



//Scroll reveal animation
//common reveal options to create reveal animations
// Target elements,and specify options to create reveal animations