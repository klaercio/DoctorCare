function onScroll() {
   /*  const element = document.getElementById("navigation");
    const classLista = element.classList;

    if (classLista.toString().includes('scrol')){
        console.log('scrool já existe');
    }else {
        element.classList = 'scroll';
    } */

    navigation.classList.add('scroll');
    
    if(scrollY === 0) 
        navigation.classList.remove('scroll');
}