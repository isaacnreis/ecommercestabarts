const carregarProduto = () => {
  return fetch(`http://localhost:3000/produtos`)
  .then(resposta => {
    if(resposta.ok){
      return resposta.json()
    }
    throw new Error('Não foi possível carregar os produtos');
  });
}

export const produtosService = {
  carregarProduto
}