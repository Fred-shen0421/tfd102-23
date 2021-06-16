let pushing = document.querySelectorAll('.joining-btn');
let joining = document.querySelector('.shopping-car');
let shopping = document.querySelector('.shopping-car-content');
let proAll = [];
let allproduct = [
  {
    Image: './img/a01.jpg',
    h2: '即期商品-原味辣椒醬',
    num: 1,
    price: 200,
  },
  {
    Image: './img/a03.jpg',
    h2: '即期商品-小卷辣椒醬',
    num: 1,
    price: 250,
  },
  {
    Image: './img/a04.jpg',
    h2: '即期商品-小魚乾辣椒醬',
    num: 1,
    price: 220,
  },
  {
    Image: './img/a04.jpg',
    h2: '即期商品-酸豆角辣椒醬',
    num: 1,
    price: 220,
  },
  {
    Image: './img/a03.jpg',
    h2: '即期商品-櫻花蝦辣椒醬',
    num: 1,
    price: 250,
  },
  {
    Image: './img/a01.jpg',
    h2: '即期商品-菜圃辣椒醬',
    num: 1,
    price: 200,
  },
  {
    Image: './img/a03.jpg',
    h2: '即期商品-剝皮辣椒醬',
    num: 1,
    price: 300,
  },
  {
    Image: './img/a01.jpg',
    h2: '即期商品-蒜香辣椒醬',
    num: 1,
    price: 200,
  },
  {
    Image: './img/a04.jpg',
    h2: '即期商品-蔥爆辣椒醬',
    num: 1,
    price: 200,
  },
];

pushing.forEach((btn) => {
  btn.addEventListener('click', function (e) {
    let proName = e.target
      .closest('.product-box')
      .querySelector('.name').textContent;

    let index = proAll.findIndex((li) => {
      return li.proH2 == proName;
    });
    console.log(index); //index = proName在proAll陣列中的第幾個。

    if (index == -1) {
      for (let i = 0; i < allproduct.length; i++) {
        // console.log(allproduct[i].h2);
        if (proName == allproduct[i].h2) {
          let prObj = {
            proImage: allproduct[i].Image,
            proH2: allproduct[i].h2,
            proNum: allproduct[i].num,
            proPrice: allproduct[i].price,
          };
          // console.log(prObj);
          proAll.push(prObj);
          // console.log(proAll.indexOf(prObj));
        }
      }
    } else {
      proAll[index].proNum++;
      proAll[index].proPrice =
        proAll[index].proPrice +
        proAll[index].proPrice / (proAll[index].proNum - 1);
    }

    let str = '';
    proAll.forEach((p) => {
      str += `
      <div class="inner-all">
      <img src="${p.proImage}" class="inner-img">
      <div class="inner-content">
        <div class="inner-name">${p.proH2}</div>

        <div class="inner-list">
        <div class="inner-num">${p.proNum}</div>
        <div class="inner-price">${p.proPrice}</div>
        <i class="fas fa-trash-alt"></i>
        </div>
      </div>
    </div>
      `;

      // console.log(str);
    });
    shopping.innerHTML = str;
  });
});

shopping.addEventListener('click', function (e) {
  if (e.target.className == 'fas fa-trash-alt') {
    let deletepro = e.target
      .closest('.inner-all')
      .querySelector('.inner-name').textContent;
    console.log(deletepro);
    proAll.forEach((li) => {
      console.log(li.proH2);
      if (deletepro == li.proH2) {
        let d_index = proAll.findIndex((d) => {
          return d.proH2 == deletepro;
        });
        console.log(d_index);
        proAll.splice(d_index, 1);
        let str2 = '';
        proAll.forEach((g) => {
          str2 += `
            <div class="inner-all">
            <img src="${g.proImage}" class="inner-img">
            <div class="inner-content">
              <div class="inner-name">
                ${g.proH2}
              </div>
              <div class="inner-list">
              <div class="inner-num">${g.proNum}</div>
              <div class="inner-price">${g.proPrice}</div>
              <i class="fas fa-trash-alt"></i>
              </div>
            </div>
          </div>
            `;
        });
        console.log(str2);
        shopping.innerHTML = str2;
      }
    });
  }
});

// let obj = {};
// obj.img = e.closest('.model01').querySelector('.img01');
// obj.name = e.closest('.model01').querySelector('.product01-content');
// obj.price = e.closest('.model01').querySelector('.price01');

// console.log(obj);

// 購物車步驟

// 1.對我要用到的class聲明。
// 2.在全域創一個空陣列，用來包裝我的物件。
// 3.創一個陣列allproduct，裡面包含我全部商品在購物車中該顯示出的資料 (偽localstorage)。
// 4.對加入購物車的btn做點擊事件(由於9個btn是相同的className,所以使用querySelectorAll同時聲明,搭配forEach使用,
//   來分別抓取每一個btn)。
// 5.對btn做點擊事件。
// 6.聲明proName => 抓取我點即到的那個btn的產品名稱。
// 7.first step => 寫if判斷式來判斷，我點擊到的proName是否等於allproduct中的名稱(h2)。
//   second step => 如果名稱相等，則創造一個物件，裡面包含了{照片\名稱\數量\價格} ，並將物件推入全域聲明的空物件裡。
//   third step => 產品列表中總共有9個不同的產品，這時我們必須搭配著for迴圈使用，讓for迴圈去執行9次，
//                 來抓取哪一項商品符合我的判斷式。
//   fourth step (important) => 這時我們需要去判斷說，購物車中是否已經有商品的存在，如果沒有則新增物件並推入陣列中，
//                              反之如果商品已存在，則將商品數量及價格進行壘加。
//   five step => 在全域聲明一個變數，並使用findIndex函式搭配if使用。
//   six step => 最後撰寫innerHTML，並將陣列渲染到div上。

// let d_index = proAll.findIndex((d) => {
//   return d.proH2 == deletepro;
// });

// console.log(d_index);
// proAll.splice(d_index, 1);

// let str2 = '';
// proAll.forEach((g) => {
//   str3 += `
//     <div class="inner-all">
//     <img src="${g.proImage}" class="inner-img">
//     <div class="inner-content">
//       <div class="inner-name">
//         ${g.proH2}
//       </div>

//       <div class="inner-list">
//       <div class="inner-num">${g.proNum}</div>
//       <div class="inner-price">${g.proPrice}</div>
//       <i class="fas fa-trash-alt"></i>
//       </div>
//     </div>
//   </div>
//     `;
// });
// console.log(str2);
// shopping.innerHTML = str2;
