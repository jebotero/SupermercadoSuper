import { productoServices } from "../servicios/producto-servicios.js";

const form = document.querySelector("[data-form]");

form.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nome = document.querySelector("[data-nome]").value;
  const url = document.querySelector("[data-url]").value;
  const preco = document.querySelector("[data-preco]").value;
  const tipo = document.querySelector("[data-tipo]").value;
  const description = document.querySelector("[data-description]").value;

  productoServices
    .creaProdutos(nome, url, preco, tipo, description)
    .then((resposta) => {
      window.location.href = "../screens/produto.html";
      console.log(resposta);
    })
    .catch((err) => {
      console.log(err);
    });
});


const selectButton = document.getElementById("select-button");
selectButton.addEventListener("click", function() {
  document.getElementById("image-file").click();
});

const imageFile = document.getElementById("image-file");
imageFile.addEventListener("change", function() {
  const file = imageFile.files[0];
  const reader = new FileReader();
  reader.addEventListener("load", function() {
    document.getElementById("image-url").value = reader.result;
  });
  reader.readAsDataURL(file);
});
