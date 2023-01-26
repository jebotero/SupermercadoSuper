import { productoServices } from "../servicios/producto-servicios.js";

const getURL = new URL(window.location);

const id = getURL.searchParams.get("id");

const inputTipo = document.querySelector("[data-tipo]");
const inputNombre = document.querySelector("[data-nome]");
const inputImageUrl = document.querySelector("[data-url]");
const inputPrecio = document.querySelector("[data-preco]");
const inputDescripcion = document.querySelector("[data-description]");

productoServices.listarUnProduto(id).then((datos) => {
  inputTipo.value = datos.tipo;
  inputNombre.value = datos.name;
  inputImageUrl.setAttribute("src", datos.imageUrl);
  inputPrecio.value = datos.price;
  inputDescripcion.value = datos.description;
});

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  productoServices
    .alteraProduto(
      inputTipo.value,
      inputNombre.value,
      inputImageUrl.value,
      inputPrecio.value,
      inputDescripcion.value,
      id
    )
    .then(() => {
      window.location.href = "../screens/produto.html";
    });
});
