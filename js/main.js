var elButton = document.querySelector('.header__burger-btn');
var elMenu = document.querySelector('.menu');
var elLink = document.querySelector('.contact-link');

elButton.addEventListener('click', function(){
    elMenu.classList.toggle("menu--open")
    elLink.classList.toggle("contact--open")
})