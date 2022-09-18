
let burger = document.querySelector('.burger');
let menu = document.querySelector('.menu');
let header = document.querySelector('header')

burger.addEventListener('click', function(event) {
    menu.classList.toggle('menu_mob');
    header.classList.toggle('head_mob');
})


/*Slider*/

const prev = document.getElementById('btn-prev');
const next = document.getElementById('btn-next');
const slidesShow = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

let n = 0;

let activeSlide = function(n) {
    slidesShow.forEach(function(item, index, array) {
        item.classList.remove('active');
    });
    slidesShow[n].classList.add('active');
}

let activeDot = function(n) {
    dots.forEach(function(item, index, array) {
        item.classList.remove('active');
    });
    dots[n].classList.add('active');
}

const prepareCurrant = function(n){
    activeSlide(n);
        activeDot(n);
}

next.addEventListener('click', function(){
    if (n == slidesShow.length - 1) {
        n = 0;
        prepareCurrant(n);
    } else {
        n++;
        prepareCurrant(n);
    }
})

prev.addEventListener('click', function(){
    if (n == 0) {
        n = slidesShow.length - 1;
        prepareCurrant(n);
    } else {
        n--;
        prepareCurrant(n);
    }
})



dots.forEach(function(item, index, array) {
    item.addEventListener('click', function() {
        n = index;
        prepareCurrant(n);
})
});

/* ------------------Footer Sublist----------------------- */

const subFooter = document.querySelectorAll('.footer_list div')
const subList = document.querySelectorAll('.footer_list ul');
const subImg = document.querySelectorAll('.footer_list img')

subList.forEach(function(item, index, array) {
    i = index;
    subFooter[i].addEventListener('click', function() {
        item.classList.toggle('sublist');
})
});
subImg.forEach(function(item, index, array) {
    i = index;
    subFooter[i].addEventListener('click', function() {
        item.classList.toggle('sublist');
})
});
