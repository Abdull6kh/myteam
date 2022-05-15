var elButton = document.querySelector('.header__burger-btn');
var elMenu = document.querySelector('.menu');
var elLink = document.querySelector('.contact-link');
var elBtn = document.querySelector('.meet__button');
var elCard = document.querySelector('.meet__item');
var elBtn2 = document.querySelector('.button2');
var elCard2 = document.querySelector('.card2');
var elBtn3 = document.querySelector('.button3');
var elCard3 = document.querySelector('.card3');
var elBtn4 = document.querySelector('.button4');
var elCard4 = document.querySelector('.card4');
var elBtn5 = document.querySelector('.button5');
var elCard5 = document.querySelector('.card5');
var elBtn6 = document.querySelector('.button6');
var elCard6 = document.querySelector('.card6');

elButton.addEventListener('click', function(){
    elMenu.classList.toggle("menu--open")
    elLink.classList.toggle("contact--open")
})
elBtn.addEventListener('click', function() {
    elBtn.classList.toggle("button--open")
    elCard.classList.toggle("card--open")
})
elBtn2.addEventListener('click', function() {
    elBtn2.classList.toggle("button--open2")
    elCard2.classList.toggle("card--open2")
})
elBtn3.addEventListener('click', function() {
    elBtn3.classList.toggle("button--open3")
    elCard3.classList.toggle("card--open3")
})
elBtn4.addEventListener('click', function() {
    elBtn4.classList.toggle("button--open4")
    elCard4.classList.toggle("card--open4")
})
elBtn5.addEventListener('click', function() {
    elBtn5.classList.toggle("button--open5")
    elCard5.classList.toggle("card--open5")
})
elBtn6.addEventListener('click', function() {
    elBtn6.classList.toggle("button--open6")
    elCard6.classList.toggle("card--open6")
})