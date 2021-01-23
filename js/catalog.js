const popGoods = document.querySelectorAll('.pop_good');


popGoods.forEach(good => {
    good.addEventListener('mouseover', () => {
        const goodA = good.querySelector('a');
        const img = goodA.querySelector('img');
        if (img.style.display !== 'none') {
            img.style.display = 'none'
            const btnBuy = document.createElement('button');
            const btnPlus = document.createElement('button');
            btnBuy.textContent = 'Купить';
            btnPlus.textContent = 'В закладки';
            goodA.appendChild(btnBuy);
            goodA.appendChild(btnPlus);
        }
    })
})

popGoods.forEach(good => {
    good.addEventListener('mouseout', () => {
        
        const goodA = good.querySelector('a');
        const img = goodA.querySelector('img');
        if (img.style.display === 'none') {
            img.style.display = 'block'
            // console.log(good, '---')
            const btns = goodA.querySelectorAll('button');
            btns.forEach(btn => btn.remove())
        }
    })
})

