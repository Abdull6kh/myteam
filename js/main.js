var elButton = document.querySelector('.header__burger-btn');
var elBox = document.querySelector('.clicked');
var elMenu = document.querySelector('.menu');
var elLink = document.querySelector('.contact-link');

elButton.addEventListener('click', function(){
    elBox.classList.toggle("clicked--open")
    elMenu.classList.toggle("menu--open")
    elLink.classList.toggle("contact--open")
})