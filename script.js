function mostrarSenha() {
  var inputPass = document.getElementById("senha");
  var btnShowPass = document.getElementById("icone-senha");

  if (inputPass.type === "password") {
    inputPass.setAttribute("type", "text");
    btnShowPass.classList.replace("fa-lock", "fa-lock-open");
  } else {
    inputPass.setAttribute("type", "password");
    btnShowPass.classList.replace("fa-lock-open", "fa-lock");
  }
}
