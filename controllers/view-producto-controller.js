import { productoServices } from "../servicios/producto-servicios.js"

const getURL = new URL(window.location);

const id = getURL.searchParams.get("id");

const inputImageUrl = document.querySelector("[data-url]");
const inputNombre = document.querySelector("[data-nome]");
const inputPrecio = document.querySelector("[data-preco]");
const inputDescripcion = document.querySelector("[data-description]");
const inputTipo = document.querySelector("[data-tipo]");

productoServices.listarUnProduto(id).then((datos) => {
  inputImageUrl.setAttribute("src", datos.imageUrl);
  inputNombre.value = datos.name;
  inputPrecio.value = datos.price;
  inputDescripcion.value = datos.description;
  inputTipo.value = datos.tipo;
});

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  productoServices
    .listarUnProduto(
      id,
      inputNombre.value,
      inputImageUrl.value,
      inputPrecio.value,
      inputTipo.value,
      inputDescripcion.value
    )
    .then(() => {
      window.location.href = "../screens/mostrar-producto.html";
    });
});