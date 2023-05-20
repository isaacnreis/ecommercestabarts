const form = document.querySelector(".login__form");
const inputs = document.querySelectorAll("input");
const botaoEntrar = document.querySelector(".login__botao");
const email = document.getElementById("email");
const password = document.getElementById("senha");

const profiles = {};

profiles.getProfiles = () => {
  return fetch("../db.json")
    .then((response) => response.json())
    .then((bJson) => bJson.profile)
    .then((profiles) => profiles.map((profile) => profile));
};

function validaLogin() {
  form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const emailDigitado = email.value;
    const senhaDigitada = password.value;

    profiles.getProfiles().then((profiles = []) => {
      const verifica = profiles.map((profile) => {
        if(emailDigitado == profile.email && senhaDigitada == profile.senha){
            return true
        } else {
            return false
        }
      });

      let resultado = false
      verifica.forEach(boolean => {if(boolean == true) {resultado = true}})

      if (resultado) {
        window.location.href = "./todos-produtos.html";
        console.log("Usuario valido");
      } else {
        console.log("Usuario invalido");
        botaoEntrar.parentElement.classList.add("login-container--invalido");
      }
    });
  });
}

botaoEntrar.setAttribute("disabled", "disabled")

inputs.forEach((input) => {
  input.addEventListener("blur", (evento) => {
    valida(evento.target);

    if (input.value) {
        botaoEntrar.removeAttribute("disabled")
    } else {
      botaoEntrar.setAttribute("disabled", "disabled")
    }
  });
});

function valida(input) {
  if (input.validity.valid) {
    input.parentElement.classList.remove("login-container--invalido");
  } else {
    input.parentElement.classList.add("login-container--invalido");
  }
}

validaLogin();
