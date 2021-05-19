let nav = document.querySelector('.fill-border');

window.addEventListener('scroll', function () {
  if (scrollY < 100) {
    nav.className = 'fill-border';
  } else {
    nav.classList.add('background-black');
  }
  console.log(nav);
});

// 購物車

// let search = document.querySelector('.shop-cart');
// let page = document.querySelector('.black-page');
// let shop = document.querySelector('.shopping-car');
// let black = document.querySelector('.black');
// let move = document.querySelector('.car-move');

// search.addEventListener('click', function () {
//   page.style.display = 'flex';
//   shop.style.display = 'block';
//   shop.classList.add('car-move');
// });

// black.addEventListener('click', function () {
//   page.style.display = 'none';
//   shop.style.display = 'none';
// });

let buy = document.querySelector('.shop-cart');
let shop = document.querySelector('.shopping-car');
let back = document.querySelector('body');

buy.addEventListener('click', function (e) {
  e.stopPropagation();
  shop.style.left = '0px';
});

back.addEventListener('click', function (e) {
  e.stopPropagation();
  shop.style.left = '-300px';
  // console.log('hi');
});

// 浮字

const title1 = document.querySelector('.title_1');
const circle01 = document.querySelector('.circle01');
const content1 = document.querySelector('.content1');

circle01.addEventListener('mouseover', function () {
  title1.classList.add('title_1-active');
  content1.classList.add('content1-active');
});

const title2 = document.querySelector('.title_2');
const circle03 = document.querySelector('.circle03');
const content2 = document.querySelector('.content2');

circle03.addEventListener('mouseover', function () {
  title2.classList.add('title_2-active');
  content2.classList.add('content2-active');
});

const title3 = document.querySelector('.title_3');
const circle02 = document.querySelector('.circle02');
const content3 = document.querySelector('.content3');

circle02.addEventListener('mouseover', function () {
  title3.classList.add('title_3-active');
  content3.classList.add('content3-active');
});
