const produtos = [...document.querySelectorAll('.produtos__linha')];
const produto = document.querySelector('.produto');
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