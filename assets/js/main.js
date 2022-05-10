window.addEventListener('scroll', onScroll);

function onScroll() {
   /*  const element = document.getElementById("navigation");
    const classLista = element.classList;

    if (classLista.toString().includes('scrol')){
        console.log('scrool já existe');
    }else {
        element.classList = 'scroll';
    } */
    showNavOnScrool();
    showBackToTopButtonOnScroll();
    activateMenuAtCurrentSection();
}

function showNavOnScrool() {
    navigation.classList.add('scroll');
    
    if(scrollY === 0) 
        navigation.classList.remove('scroll');
}

function showBackToTopButtonOnScroll() {
    backToTopButton.classList.remove('show');
    
    if(scrollY >=500 ) 
        backToTopButton.classList.add('show');
}

/* function addContentBottomInMenu() {
    homeActive.classList.remove('active');
    servicesActive.classList.remove('active');
    aboutActive.classList.remove('active');

    if((scrollY >= 0) && (scrollY <= 990))
        homeActive.classList.add('active');

    if((scrollY >= 991) && (scrollY <= 1990))
        servicesActive.classList.add('active');

    if(scrollY >= 1991)
        aboutActive.classList.add('active');
} */

function activateMenuAtCurrentSection() {

    const targetLine = (scrollY + (scrollY + innerHeight)) / 2;



    /* console.log(`home ${home.offsetHeight} services ${services.offsetHeight} sobre ${about.offsetHeight}`);
    console.log(`home ${home.offsetTop} services ${services.offsetTop} sobre ${about.offsetTop}`); */

   /*  console.log(`homeTop - scrollY ${home.offsetTop - scrollY} homeInnetH ${home.offsetHeight}`)

    console.log(`services ${services.offsetHeight - scrollY}`) */


    // offsetHeight é fixo e o top tambem

    homeActive.classList.remove('active');
    servicesActive.classList.remove('active');
    aboutActive.classList.remove('active');
    
     if ((home.offsetTop <= targetLine) && (home.offsetHeight >= targetLine)) {
        homeActive.classList.add('active');
    } 

    if ((services.offsetTop  <= targetLine) && (services.offsetTop + services.offsetHeight)  >= targetLine)
        servicesActive.classList.add('active');

    if ((about.offsetTop <= targetLine) && (about.offsetTop + about.offsetHeight) >= targetLine)
        aboutActive.classList.add('active'); 
     

}

function openMenu() {
    document.body.classList.add('menu-expanded');
}

function closeMenu() {
    document.body.classList.remove('menu-expanded')
}

ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 1000,
}).reveal(`
    #home,
    #home img,
    #home .stats,
    #services,
    #services header,
    #services .card,
    #about,
    #about header,
    #about .content,
    #contact,
    #contact header,
    #contact .content`);
    