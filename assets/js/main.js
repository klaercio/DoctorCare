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
    #about .content`);