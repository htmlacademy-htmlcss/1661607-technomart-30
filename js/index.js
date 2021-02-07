const dots = document.querySelectorAll('.slider-dot-item');
const arrowLeft = document.querySelector('.slider-arrow-left');
const arrowRight = document.querySelector('.slider-arrow-right');
const slide = document.querySelector(".promo-slide-img img");
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
  slide.setAttribute('src', sliderImgSrc[num])
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
})

const srviceTexts = [
  'Мы с удовольствием доставим ваш товар прямо <br />к вашему подъезду совершенно бесплатно!<br />Ведь мы неплохо заработаем, <br />поднимая его на ваш этаж!',
  'Если купленный у нас товар поломается или заискрит, а также в случае пожара, спровоцированного его возгоранием, вы всегда можете быть уверены в нашей гарантии. Мы обменяем сгоревший товар на новый. Дом уж восстановите как-нибудь сами.',
  'Залезть в долговую яму стало проще! <br />Кредитные консультанты придут вам на помощь.'
]

// const srviceImgClases = ['serv_img0', 'serv_img1', 'serv_img2']

// const services = document.querySelectorAll('.serv-items');
// const headerServ = document.querySelector('.text_services h3')
// const textServPar = document.querySelector('.text_services p')
// const servImg = document.querySelector('.services_img')

// services.forEach((serv, i) => {
//   serv.addEventListener('click', () => {
//     services.forEach(s => s.classList.remove('serv-items-active'));
//     serv.classList.add('serv-items-active');
//     headerServ.textContent = serv.textContent;
//     textServPar.innerHTML = srviceTexts[i];
//     srviceImgClases.forEach(clas => servImg.classList.remove(clas))
//     servImg.classList.add(srviceImgClases[i]);
//   });
// })


// const writeUs = document.getElementById('write_us');
// const modalCalling = document.querySelector('.modal_calling');
// const closeModalBtn = modalCalling.querySelector('.close_basket')


// writeUs.addEventListener('click', evt => {
//   evt.preventDefault();
//   modalCalling.parentNode.style.display = 'flex';
// })

// closeModalBtn.onclick = () => modalCalling.parentNode.style.display = 'none';
