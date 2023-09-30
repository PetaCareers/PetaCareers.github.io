/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')


    /*validate if constant exists */
    if(navToggle){
        navToggle.addEventListener('click',() =>{
        navMenu.classList.add('show-menu')
        })
    }

    /*try to hide the menu*/
    if(navClose){
        navClose.addEventListener('click', () =>{
            navMenu.classList.remove('show-menu')
        })
    }

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SHADOW HEADER ===============*/
const shadowHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                        : header.classList.remove('shadow-header')
}
window.addEventListener('scroll',shadowHeader)
/*=============== EMAIL JS ===============*/

contactForm.addEventListener('submit', sendEmail)
/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const SECTIONS = document.querySelectorAll('selection[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

    SECTIONS.forEach(CURRENT =>{
        const selectionHeigth = CURRENT.offsetHeight,
            sectionTop = CURRENT.offsetTop - 58,
            sectionId = CURRENT.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menua[href*=' + sectionId + ']')
        if(scrollDown > screenTop && scrollDown <= sectionTop + sectionHeigth){
        sectionsClass.classList.add('active-link')
        }else{
        sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== DARK LIGHT THEME ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal('.home__peta, .about__image', {origin: 'right'})
sr.reveal('.home__name, .home__info, .about__container', {origin: 'left'})