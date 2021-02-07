// не знаю как экспортировать без сборщиков, поэтому просто скопировал из index.js

function openModal(modalForOpen, btnForOpen) {
    btnForOpen.addEventListener('click', evt => {
      evt.preventDefault();
      modalForOpen.parentNode.style.display = 'flex';
      document.body.style.overflow = 'hidden';

      //добавка
      counterBuy++;
      buyNum.textContent = counterBuy;
      buttonCart.classList.add('header-something-inside')
    })
  }
  
  function closeModal(modalForClose, btnForClose) {
    btnForClose.addEventListener('click', () => {
      modalForClose.parentNode.style.display = 'none';
      document.body.style.overflow = '';
    })
  }


const modalAdded = document.querySelector('.modal-added');
const closeModalAdded = modalAdded.querySelector('.modal-close');
const closeModalAdded2 = modalAdded.querySelector('.button-buy');
const closeModalAdded3 = modalAdded.querySelector('.modal-button-continue');

const templ = document.getElementById("buy-and-bookmark");
const catds = document.querySelectorAll('.products-item');

let counterBuy = 0;
let counterBookmark = 0;

// счетчики в хедере
const buttonCart = document.querySelector('.button-cart'); // не кнопка
const buyNum = buttonCart.querySelector('.button-cart-num');
const buttonBookmark = document.querySelector('.button-bookmark');// не кнопка
const bookmarkNum = buttonBookmark.querySelector('.button-bookmark-num')


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

catds.forEach(card => {
    card.addEventListener('mouseenter', () => {
        const container = card.querySelector('.product-item-container');
        const img = container.querySelector('img');
        img.style.display = 'none';
        container.append(templ.content.cloneNode(true));
        addTooCart(card);
        addTooBookmark(card);
    })
})

catds.forEach(card => {
    card.addEventListener('mouseleave', () => {
        const container = card.querySelector('.product-item-container');
        const img = container.querySelector('img');
        const revoveBlock = container.querySelector('.image-to-buy');
        revoveBlock.remove()
        img.style.display = 'block';
    })
})


function addTooCart(elem) {
    const addedButton = elem.querySelector('.buy-prod');
    openModal(modalAdded, addedButton);
    closeModal(modalAdded, closeModalAdded);
    closeModal(modalAdded, closeModalAdded2);
    closeModal(modalAdded, closeModalAdded3);
}  




