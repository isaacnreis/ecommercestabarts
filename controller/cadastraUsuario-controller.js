import { usuarioService } from "../service/usuario-service.js";

const formulario = document.querySelector('.login__form');

formulario.addEventListener('submit', async (evento)=>{
  evento.preventDefault();

  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  try{
    await usuarioService.criaUsuario(email, senha);
    alert('Usuário criado com sucesso')
    window.location.href = '../telas/login.html';
  } catch(error){
    alert('Não foi possível criar o usuário')
  }
})