import { productoServices } from "../servicios/producto-servicios.js";
import { formatPrice } from "../formatterPrices.js";

const nuevoProduto = (name, imageUrl, price, description, id) => {
  const card = document.createElement("div");
  const contenido = `
        <div class="produto">
            <h1 class="product-name"> ${name} </h1>
            <img src="../assets/${imageUrl}" alt="img">        
            <p class="preco">${formatPrice(price)}</p>
            <p class="descripcion"> ${description}</p>
            <a class="ver-produto" href="../produto.html?id=${id}">Ver Produto</a>
        </div>   
    `;
  card.innerHTML = contenido;
  console.log(contenido);
  card.dataset.id = id;

  return card;
};

const productos = document.querySelector("[data-product]");

const render = async () => {
  try {
    const listaProductos = await productoServices.listaProductos();
    listaProductos.forEach((elemento) => {
      productos.appendChild(
        nuevoProduto(
          elemento.name,
          elemento.imageUrl,
          elemento.price,
          elemento.description,
          elemento.id
        )
      );
    });
  } catch (erro) {
    console.log(erro);
  }
};

render();