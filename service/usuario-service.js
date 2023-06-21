const criaUsuario = (email, senha) => {
  return fetch(`http://localhost:3000/profile`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email,
      senha: senha
    })
  })
  .then( resposta => {
    if( resposta.ok){
      return resposta.body;
    }
      throw new Error('Não foi possível criar o usuário');
  })
}

export const usuarioService = {
  criaUsuario: criaUsuario
}