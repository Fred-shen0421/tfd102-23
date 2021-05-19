let buy = document.querySelector('.shop-cart');
let shop = document.querySelector('.shopping-car');
let back = document.querySelector('body');

buy.addEventListener('click', function (e) {
  e.stopPropagation();
  shop.style.left = '0px';
});

back.addEventListener('click', function () {
  shop.style.left = '-300px';
  console.log('hi');
});
