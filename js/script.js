// GLOBAL

// счетчики в хедере
const buttonCart = document.querySelector('.button-cart'); 
const buyNum = buttonCart.querySelector('.button-cart-num');
const buttonBookmark = document.querySelector('.button-bookmark');
const bookmarkNum = buttonBookmark.querySelector('.button-bookmark-num');
let counterBuy = 0;
let counterBookmark = 0;

const scrollWidth = getScrollWidth();


// PROMO_SLIDER

const dots = document.querySelectorAll('.slider-dot-item');
const arrowLeft = document.querySelector('.slider-arrow-left');
const arrowRight = document.querySelector('.slider-arrow-right');
const promoSlide = document.querySelector(".promo-slide-img img");
const sliderHeaderCurent = document.querySelector(".promo-slide-name");
const sliderTextCurent = document.querySelector(".promo-slide-description");

const sliderImgSrc = [
  "img/slides/slide-perforator.jpg",
   "img/slides/slide-drill.jpg",
  ];
const sliderHeaders = [
  "ПЕРФОРАТОРЫ",
   "ДРЕЛИ"
  ];
const sliderTexts = [
  "Настоящие мужские игрушки", 
  "Соседям на радость!"
]
let slideId = 0

const changeSlide = (num) => {
  dots.forEach(dot => {
    dot.classList.remove("slider-dot-active");
  });
  dots[num].classList.add("slider-dot-active");
  promoSlide.setAttribute('src', sliderImgSrc[num])
  sliderHeaderCurent.textContent = sliderHeaders[num];
  sliderTextCurent.textContent = sliderTexts[num];
}

if (arrowRight && arrowLeft && dots) {
    arrowRight.addEventListener('click', () => {
    if (slideId < sliderImgSrc.length - 1) {
        slideId++;
    } else {
        slideId = 0
    };
    changeSlide(slideId);
    })

    arrowLeft.addEventListener('click', () => {
    if (slideId > 0) {
        slideId--;
    } else {
        slideId = sliderImgSrc.length - 1;
    };
    changeSlide(slideId);
    });

    dots.forEach((dot, i) => {
    dot.addEventListener('click', (evt) => {
        if (evt.target == dot) changeSlide(i);
    })
    })
}


// services-slider

const srviceTexts = [
  'Мы с удовольствием доставим ваш товар прямо <br />к вашему подъезду совершенно бесплатно!<br />Ведь мы неплохо заработаем, <br />поднимая его на ваш этаж!',
  'Если купленный у нас товар поломается или заискрит, а также в случае пожара, спровоцированного его возгоранием, вы всегда можете быть уверены в нашей гарантии. Мы обменяем сгоревший товар на новый. Дом уж восстановите как-нибудь сами.',
  'Залезть в долговую яму стало проще! <br />Кредитные консультанты придут вам на помощь.'
]
const srviceImgClases = [
  'service-img-truck', 
  'service-img-garant', 
  'service-img-credit'
];

const services = document.querySelectorAll('.services-item');
const headerService = document.querySelector('.service-description h3');
const textService = document.querySelector('.service-description p');
const serviceImg = document.querySelector('.service-img');
const buttonCredit = document.querySelector('.button-credit');

const allDisactivate = () => {
  services.forEach(service => {
    service.classList.remove('services-item-active');
    service.classList.add('services-item-disactive');
  })
}

services.forEach((serv, i) => {
  serv.addEventListener('click', () => {
    allDisactivate();
    serv.classList.remove('services-item-disactive');
    serv.classList.add('services-item-active');
    headerService.textContent = serv.textContent;
    textService.innerHTML = srviceTexts[i];
    srviceImgClases.forEach(clas => serviceImg.classList.remove(clas))
    serviceImg.classList.add(srviceImgClases[i]);
    if (serv.textContent === "Кредит") {
      buttonCredit.style.display = "block";
    } else {
      buttonCredit.style.display = "none";
    }
  });
})


// modals

function closeModal(modalForClose, btnForClose) {
  btnForClose.addEventListener('click', () => {
    modalForClose.parentNode.style.display = 'none';
    document.body.style.overflow = '';
    document.body.style.marginRight = 0;
  })
}

// login modal

const writeUs = document.getElementById('write-us');

if (writeUs) {
    const modalLogin = document.querySelector('.modal-login');
    const closeModalLogin = modalLogin.querySelector('.modal-close');

    openModal(modalLogin, writeUs);
    closeModal(modalLogin, closeModalLogin);
}


// map modal

const modalMap = document.querySelector('.modal-map');

if (modalMap) {
    const mapButton = document.querySelector('.company-location-img');
    const closeModalMap = modalMap.querySelector('.modal-close');
    openModal(modalMap, mapButton);
    closeModal(modalMap, closeModalMap);
}

function openModal(modalForOpen, btnForOpen) {
    btnForOpen.addEventListener('click', evt => {
      evt.preventDefault();
      modalForOpen.parentNode.style.display = 'flex';
      document.body.style.overflow = 'hidden';
      document.body.style.marginRight = `${scrollWidth}px`;
        // если жмем "купить":
      if (btnForOpen.classList.contains('buy-prod')) {
        counterBuy++;
        buyNum.textContent = counterBuy;
        buttonCart.classList.add('header-something-inside')
      }
    })
  }
  
const modalAdded = document.querySelector('.modal-added');
const closeModalAdded = modalAdded.querySelector('.modal-close');
const closeModalAdded2 = modalAdded.querySelector('.button-buy');
const closeModalAdded3 = modalAdded.querySelector('.modal-button-continue');

const templ = document.getElementById("buy-and-bookmark");
const cards = document.querySelectorAll('.products-item');


// счетчик для закладок
function addTooBookmark(elem) {
    const BookmarkPlus = elem.querySelector('.bookmark-prod');
    BookmarkPlus.addEventListener('click', evt => {
        evt.preventDefault();
        counterBookmark++;
        bookmarkNum.textContent = counterBookmark;
        buttonBookmark.classList.add('header-something-inside')

    })
}

// обработчики для карточек продуктов
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        const container = card.querySelector('.product-item-container');
        const img = container.querySelector('img');
        img.style.display = 'none';
        container.append(templ.content.cloneNode(true));
        addTooCart(card);
        addTooBookmark(card);
    })
})

cards.forEach(card => {
    card.addEventListener('mouseleave', () => {
        const container = card.querySelector('.product-item-container');
        const img = container.querySelector('img');
        const revoveBlock = container.querySelector('.image-to-buy');
        revoveBlock.remove()
        img.style.display = 'block';
    })
})

// вешаем события на кнопку купить и на остальные 3 кнопки - закрыть.
function addTooCart(elem) {
    const addedButton = elem.querySelector('.buy-prod');
    openModal(modalAdded, addedButton);
    closeModal(modalAdded, closeModalAdded);
    closeModal(modalAdded, closeModalAdded2);
    closeModal(modalAdded, closeModalAdded3);
}  


// убрать дерганье модального окна от скрола
function getScrollWidth() {
    const div = document.createElement('div');
    div.style.overflowY = 'scroll';
    div.style.width = '50px';
    div.style.height = '50px';
    div.style.visibility = 'hidden';
    document.body.appendChild(div);
    const scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWidth;
  }