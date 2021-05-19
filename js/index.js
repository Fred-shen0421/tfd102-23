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
let buy = document.querySelector('.shop-cart');
let shop = document.querySelector('.shopping-car');
let back = document.querySelector('body');

buy.addEventListener('click', function (e) {
  e.stopPropagation();
  shop.style.left = '0px';
});

back.addEventListener('click', function (e) {
  if (e.target.id === 'xxx') {
    return;
  }

  if (e.target.id === 'yyy') {
    return;
  }

  if (e.target.className === 'car-title') {
    return;
  }

  // 分別抓三個div的class or id 做判斷式
  // e.stopPropagation();
  shop.style.left = '-300px';
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

// 入侵

let form01 = document.querySelector('.form_01');
let form02 = document.querySelector('.form_02');
let form03 = document.querySelector('.form_03');

document.addEventListener('scroll', function () {
  if (scrollY > 1000) {
    form01.classList.add('down');
  }

  if (scrollY > 1300) {
    form02.classList.add('down02');
  }

  if (scrollY > 1500) {
    form03.classList.add('down03');
  }
  // if (scrollY > 1500) {
  //   form03.style.transform = 'translateX(0%)';
  // }
});
