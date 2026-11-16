const botaoDica = document.getElementById("btn-dica");
const textoDica = document.getElementById("texto-dica");

botaoDica.addEventListener("click", function () {
  if (textoDica.style.display === "none") {
    textoDica.style.display = "block";
    botaoDica.textContent = "Ocultar Dica Especial";
  } else {
    textoDica.style.display = "none";
    botaoDica.textContent = "Ver Dica Especial do Ateliê";
  }
});

const formulario = document.getElementById("form-contato");
const mensagemRetorno = document.getElementById("mensagem-retorno");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();
 
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  if (nome === "" || email === "" || mensagem === "") {
    mensagemRetorno.style.color = "#a94442"; 
    mensagemRetorno.textContent = "Por favor, preencha seu nome, e-mail e mensagem antes de enviar.";
  } else {
    
    mensagemRetorno.style.color = "#2e6b3e"; 
    mensagemRetorno.textContent = "Olá, " + nome + "! Recebemos sua mensagem com carinho. Em breve responderemos no e-mail " + email + ".";
    
    formulario.reset();
  }
});