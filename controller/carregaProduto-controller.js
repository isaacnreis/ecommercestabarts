import { produtosService } from "../service/produtos-service.js";

const modeloProduto = (imagem, nome, precoAntigo, preco) => {

  const produto = document.createElement('article');
  produto.classList.add('produto');
  const conteudo = `
  <div class="todosProd__botoes">
    <button><img src="../assets/img/lixeira.svg" alt="Ícone de lixeira"></button>
    <button><img src="../assets/img/lapis.svg" alt="Ícone de lápis"></button>
  </div>

  <img src="${imagem}" alt="${nome}" class="produto__imagem">
  <h3 class="produto__titulo">${nome}</h3>
  <div class="produto__preco">
    <p class="produto__preco--antigo">R$ ${precoAntigo}</p>
    <h3>R$ ${preco}</h3>
  </div>
  <a href="area-produto.html" class="produto__link">Ver produto</a>`;

  produto.innerHTML = conteudo;
  return produto;
}

const conteiner = document.querySelector('.todosProd__conteiner');

const render = async () => {

  try{
    const listaProdutos = await produtosService.carregarProduto();
    listaProdutos.forEach(produto => {
      conteiner.appendChild(modeloProduto(produto.imagem, produto.nome, produto.precoAntigo, produto.preco));
    });

  } catch(error){
    console.log(error);
    alert('Erro ao carregar os produtos, favor recarregue a página e tente novamente')
  }
}

render();