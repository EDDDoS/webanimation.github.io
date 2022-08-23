function navbarStyles(){
    var navbar = document.querySelector('.menu');
    var inicio = document.querySelector('.enlace_menu:nth-child(1)');
    var acerca_de = document.querySelector('.enlace_menu:nth-child(2)');
    var proyectos = document.querySelector('.enlace_menu:nth-child(3)')
    var scrollValue = window.scrollY;
    if(scrollValue > 100){
        navbar.classList.add('nav-color');
    } else {
        navbar.classList.remove('nav-color');
    }

    if(scrollValue <= 0){
        inicio.classList.add('border-enlace');
    } else {
        inicio.classList.remove('border-enlace');
    }

    if(scrollValue > 370){
        acerca_de.classList.add('border-enlace');
    } else {
        acerca_de.classList.remove('border-enlace');
    }

    if(scrollValue > 1261){
        proyectos.classList.add('border-enlace');
        acerca_de.classList.remove('border-enlace');
    } else {
        proyectos.classList.remove('border-enlace');
    }
    console.log(scrollValue);
}

window.addEventListener('scroll', navbarStyles);