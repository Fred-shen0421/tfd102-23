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
const title01 = document.querySelector('.detial-title01');
const circle01 = document.querySelector('.circle01');
const content01 = document.querySelector('.detial-content01');

circle01.addEventListener('mouseover', function () {
  title01.classList.add('detial-title01-active');
  content01.classList.add('detial-content01-active');
});

const title02 = document.querySelector('.detial-title02');
const circle02 = document.querySelector('.circle02');
const content02 = document.querySelector('.detial-content02');

circle02.addEventListener('mouseover', function () {
  title02.classList.add('detial-title02-active');
  content02.classList.add('detial-content02-active');
});

const title03 = document.querySelector('.detial-title03');
const circle03 = document.querySelector('.circle03');
const content03 = document.querySelector('.detial-content03');

circle03.addEventListener('mouseover', function () {
  title03.classList.add('detial-title03-active');
  content03.classList.add('detial-content03-active');
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

// login

const toggleForm = () => {
  const contain = document.querySelector('.contain');
  contain.classList.toggle('active');
};

let clicklogin = document.querySelectorAll('.click-login');
let black = document.querySelector('.black');
let wrong = document.querySelector('.wrong');
let wrong02 = document.querySelector('.wrong02');

// clicklogin.addEventListener('click', function () {
//   black.style.visibility = 'visible';
//   black.style.opacity = '1';
// });
console.log(clicklogin);
clicklogin.forEach((e) => {
  e.addEventListener('click', function () {
    black.style.visibility = 'visible';
    black.style.opacity = '1';
  });
});

wrong.addEventListener('click', function () {
  black.style.visibility = 'hidden';
  black.style.opacity = '0';
});

wrong02.addEventListener('click', function () {
  black.style.visibility = 'hidden';
  black.style.opacity = '0';
});
