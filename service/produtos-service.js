const carregarProduto = () => {
  return fetch(`http://localhost:3000/produtos`)
  .then(resposta => {
    if(resposta.ok){
      return resposta.json()
    }
    throw new Error('Não foi possível carregar os produtos');
  });
}

const deletaProduto = (id) => {
  return fetch(`http://localhost:3000/produtos/${id}`,{
    method: 'DELETE'
  }).then((resposta) => {
    if(!resposta.ok){
      throw new Error('Não foi possível remover o produto')
    }
  })

}

export const produtosService = {
  carregarProduto,
  deletaProduto
}