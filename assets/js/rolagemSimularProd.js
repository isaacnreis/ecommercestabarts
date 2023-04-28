const produtos = [...document.querySelectorAll('.similarProd__linha')];
const produto = document.querySelector('.similarProd__prod');
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

let dimenssao = produto.getBoundingClientRect();
let tamanho = dimenssao.width;


produtos.forEach((item, i) => {
    
        nxtBtn[i].addEventListener('click', () => {
            item.scrollLeft += tamanho;
        });
    
        preBtn[i].addEventListener('click', () => {
            item.scrollLeft -= tamanho;
        });

})