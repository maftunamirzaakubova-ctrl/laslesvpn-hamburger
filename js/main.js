const button = document.querySelector(".hamburger");
const nav = document.querySelector('.header__nav');


button.addEventListener("click",function(){
    nav.classList.toggle("header__nav--active")
    button.classList.toggle("hamburger--active")
})