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
  //  "G:\html_academy\1661607-technomart-30\img\slides\slide-perforator.jpg"
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

// services-slider





const srviceTexts = [
  'Мы с удовольствием доставим ваш товар прямо <br />к вашему подъезду совершенно бесплатно!<br />Ведь мы неплохо заработаем, <br />поднимая его на ваш этаж!',
  'Если купленный у нас товар поломается или заискрит, а также в случае пожара, спровоцированного его возгоранием, вы всегда можете быть уверены в нашей гарантии. Мы обменяем сгоревший товар на новый. Дом уж восстановите как-нибудь сами.',
  'Залезть в долговую яму стало проще! <br />Кредитные консультанты придут вам на помощь.'
]

const srviceImgClases = ['service-img-truck', 'service-img-garant', 'service-img-credit'];

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

const writeUs = document.getElementById('write-us');
const modalLogin = document.querySelector('.modal-login');
const closeModalBtn = modalLogin.querySelector('.modal-close');


writeUs.addEventListener('click', evt => {
  evt.preventDefault();
  modalLogin.parentNode.style.display = 'flex';
})

closeModalBtn.addEventListener('click', () => {
  modalLogin.parentNode.style.display = 'none';
})

// closeModalBtn.onclick = () => modalCalling.parentNode.style.display = 'none';
