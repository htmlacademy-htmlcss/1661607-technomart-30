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
const promoSlide = document.querySelector(".promo-slide-img");
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
const slideAlt = [
  "Слайд: Перфоратор Бош",
  "Слайд: Дрель Бош"
]
let slideId = 0

const changeSlide = (num) => {
  dots.forEach(dot => {
    dot.classList.remove("slider-dot-active");
  });
  dots[num].classList.add("slider-dot-active");
  promoSlide.setAttribute('src', sliderImgSrc[num]);
  promoSlide.setAttribute('alt', slideAlt[num]);
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


// SERVICES-SLIDER

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
const buttonCredit = document.querySelector('.services-credit-button');

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


// MODALS

function openModal(modalForOpen, btnForOpen) {
  btnForOpen.addEventListener('click', evt => {
    evt.preventDefault();
    modalForOpen.parentNode.style.display = 'flex';
    modalForOpen.classList.add('open-animation');
    setTimeout(() => modalForOpen.classList.remove('open-animation'), 500);
    document.body.style.overflow = 'hidden';
    document.body.style.marginRight = `${scrollWidth}px`;

    const name = modalForOpen.querySelector('[name=name]');
    if (name) {
      letterSender(modalForOpen, name);
    }

    if (btnForOpen.classList.contains('buy-prod')) {
      counterBuy++;
      buyNum.textContent = counterBuy;
      buttonCart.classList.add('header-something-inside')
    }
  })
}

function closeModal(modalForClose, btnForClose) {
  function closer() {
    modalForClose.parentNode.style.display = 'none';
    document.body.style.overflow = '';
    document.body.style.marginRight = 0;
  }

  btnForClose.addEventListener('click', () => {
    closer()
  })

  window.addEventListener('keydown', (evt) => {
    if (evt.keyCode == 27) {
      closer();
    } 
  })
}

// modals animation and forms
function letterSender(mL, name) {
  const mail = mL.querySelector('.login-email');
  const letter = mL.querySelector('.login-letter');
  const form = mL.querySelector('form');
  const loginButton = mL.querySelector('.login-button');

  if (localStorage.getItem('name')) {
    name.value = localStorage.getItem('name');
  }

  if (localStorage.getItem('mail')) {
    mail.value = localStorage.getItem('mail');
  }

  if (!name.value) {
    name.focus();
  } else if (!mail.value) {
    mail.focus();
  } else {
    letter.focus();
  }

  form.addEventListener('submit', (evt) => {
    if (name.value) {
      localStorage.setItem('name', name.value);
    }
 
    if (mail.value) {
      localStorage.setItem('mail', mail.value);
    }

    if (!name.value || !mail.value || !letter.value) {
      evt.preventDefault()
      loginButton.style.backgroundColor = 'white';
      loginButton.innerHTML = '<p class="header-text">заполните все поля</p>';
      mL.classList.add('error-animation');
      setTimeout(() => mL.classList.remove('error-animation'), 100);
      setTimeout(() => {
        loginButton.style.backgroundColor = '#EE3643';
        loginButton.textContent = 'ОТПРАВИТЬ';
      }, 1500)
    } 
  })
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
  
const modalAdded = document.querySelector('.modal-added');
const closeModalAdded = modalAdded.querySelector('.modal-close');
const closeModalAdded2 = modalAdded.querySelector('.button-buy');
const closeModalAdded3 = modalAdded.querySelector('.modal-button-continue');


const bookmarkProds = document.querySelectorAll('.bookmark-prod');
bookmarkProds.forEach(bookmark => {
  bookmark.addEventListener('click', () => {
    counterBookmark++;
    bookmarkNum.textContent = counterBookmark;
    buttonBookmark.classList.add('header-something-inside')
  })
})


// PRODUCT-CARDS

const addedButtons = document.querySelectorAll('.buy-prod');
addedButtons.forEach(addedButton => {
  openModal(modalAdded, addedButton);
  closeModal(modalAdded, closeModalAdded);
  closeModal(modalAdded, closeModalAdded2);
  closeModal(modalAdded, closeModalAdded3);
})


// CATALOG-FILTER

const rangeBlock = document.querySelector('.range');
const MAX_PRICE = 35000;
const BAR_WIDTH = 180;
const TOGGLE_ZERO = 18;
if (rangeBlock) {
  const bar = rangeBlock.querySelector('.scale .bar');
  const toggleMax = rangeBlock.querySelector('.toggle-max');
  const toggleMin = rangeBlock.querySelector('.toggle-min');
  const rangeNumbers = rangeBlock.querySelectorAll('.price-controls input');
  rangeNumbers.forEach(num => {
    num.addEventListener('input', () => {
      num.value = num.value.replace(/\D/g, '');
      if (num.value > MAX_PRICE) num.value = MAX_PRICE;
      const maxProcent = +rangeNumbers[1].value / MAX_PRICE * 100;
      const maxPix = +rangeNumbers[1].value / MAX_PRICE * BAR_WIDTH;
      const minProcent = +rangeNumbers[0].value / MAX_PRICE * 100;
      const minPix = +rangeNumbers[0].value / MAX_PRICE * BAR_WIDTH;
      toggleMax.style.left = TOGGLE_ZERO +  maxPix + 'px';
      bar.style.width = maxProcent - minProcent + '%';
      toggleMin.style.left = TOGGLE_ZERO + minPix + 'px';
      bar.style.marginLeft = minProcent / 100 * BAR_WIDTH + 'px';

      // драг энд дроп пока не очень, так что на этом все
     })
  })
}