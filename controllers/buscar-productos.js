import { productoServices } from "../servicios/producto-servicios.js";
import { formatPrice } from "../formatterPrices.js";


const buscarProductos = (name, imageUrl, price, description, id) => {
  const card = document.createElement("div");

  document.getElementById("search-input").addEventListener("click", buscarProductos);

  const contenido = `
    <div class="produto">
        <h1 class="product-name"> ${name} </h1>
        <img src="${imageUrl}" alt="img">
        <p class="preco">${formatPrice(price)}</p>
        <p class="descripcion"> ${description}</p>
    </div>
    `;
  card.innerHTML = contenido;
  card.dataset.id = id;
  return card;
};

const productos = document.querySelector("[data-allProducts]");

const render = async () => {
  try {
    const listaProductos = await productoServices.buscarProductos();

    listaProductos.forEach((producto) => {
      productos.appendChild(
        buscarProductos(
          producto.name,
          producto.imageUrl,
          producto.price,
          producto.description,
          producto.id
        )
      );
    });
  } catch (err) {
    console.log(err);
  }
};

render();