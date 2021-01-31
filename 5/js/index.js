const slide = document.querySelector('img.slider');
const sliderImgSrc = ["img/slider_perforators.jpg", "img/slider_drill.jpg"];
let slideId = 0

slide.addEventListener('click', () => {
  if (slideId < sliderImgSrc.length - 1) {
    slideId++;
  } else {
    slideId = 0
  };
  slide.setAttribute('src', sliderImgSrc[slideId]);
})



const srviceTexts = [
  'Мы с удовольствием доставим ваш товар прямо <br />к вашему подъезду совершенно бесплатно!<br />Ведь мы неплохо заработаем, <br />поднимая его на ваш этаж!',
  'Если купленный у нас товар поломается или заискрит, а также в случае пожара, спровоцированного его возгоранием, вы всегда можете быть уверены в нашей гарантии. Мы обменяем сгоревший товар на новый. Дом уж восстановите как-нибудь сами.',
  'Залезть в долговую яму стало проще! <br />Кредитные консультанты придут вам на помощь.'
]

const srviceImgClases = ['serv_img0', 'serv_img1', 'serv_img2']

const services = document.querySelectorAll('.serv-items');
const headerServ = document.querySelector('.text_services h3')
const textServPar = document.querySelector('.text_services p')
const servImg = document.querySelector('.services_img')

services.forEach((serv, i) => {
  serv.addEventListener('click', () => {
    services.forEach(s => s.classList.remove('serv-items-active'));
    serv.classList.add('serv-items-active');
    headerServ.textContent = serv.textContent;
    textServPar.innerHTML = srviceTexts[i];
    srviceImgClases.forEach(clas => servImg.classList.remove(clas))
    servImg.classList.add(srviceImgClases[i]);
  });
})


const writeUs = document.getElementById('write_us');
const modalCalling = document.querySelector('.modal_calling');
const closeModalBtn = modalCalling.querySelector('.close_basket')


writeUs.addEventListener('click', evt => {
  evt.preventDefault();
  modalCalling.parentNode.style.display = 'flex';
})

closeModalBtn.onclick = () => modalCalling.parentNode.style.display = 'none';
