import { productoServices } from "../servicios/producto-servicios.js";
import { formatPrice } from "../formatterPrices.js";

const nuevoProduto = (name, imageUrl, price, tipo, description, id) => {
  const card = document.createElement("div");
  const contenido = `
        <div class="produto">
            <h1 class="product-name"> ${name} </h1>
            <img src="../assets/${imageUrl}" alt="img">        
            <p class="preco">${formatPrice(price)}</p>
            <h1 class="product-tipo"> ${tipo} </h1>
            <p class="descripcion"> ${description}</p>
            
            <a class="ver-producto" href="../screens/mostrar-producto.html?id=${id}">Ver Produto</a>
        </div>   
        `;
  card.innerHTML = contenido;
  card.dataset.id = id;

  return card;
};

const mar = document.querySelector("[data-mar]");
const marDiv = document.querySelector("[titulo-mar]");
marDiv.innerHTML = `<div class="titulo">
<p>Mar</p>
</div>`;

const verduras = document.querySelector("[data-verduras]");
const verdurasDiv = document.querySelector("[titulo-verduras]");
verdurasDiv.innerHTML = `<div class="titulo">
<p>Verduras</p>
</div>`;

const frutas = document.querySelector("[data-frutas]");
const frutasDiv= document.querySelector("[titulo-frutas]");
frutasDiv.innerHTML = `<div class="titulo">
<p>Frutas</p>
</div>`;

const lacteos = document.querySelector("[data-lacteos]");
const lacteosDiv= document.querySelector("[titulo-lacteos]");
lacteosDiv.innerHTML = `<div class="titulo">
<p>Lacteos</p>
</div>`;

const granos = document.querySelector("[data-granos]");
const granosDiv= document.querySelector("[titulo-granos]");
granosDiv.innerHTML = `<div class="titulo">
<p>Granos</p>
</div>`;

const render = async () => {
  try {
    const listaProductos = await productoServices.listaProductos();
    listaProductos.forEach((elemento) => {
      if (elemento.tipo === "Frutas") {
        frutas.appendChild(
          nuevoProduto(
            elemento.name,
            elemento.imageUrl,
            elemento.price,
            elemento.tipo,
            elemento.description,
            elemento.id
          ));
      }
      else if (elemento.tipo === "Lacteos") {
        lacteos.appendChild(
          nuevoProduto(
            elemento.name,
            elemento.imageUrl,
            elemento.price,
            elemento.tipo,
            elemento.description,
            elemento.id
          ));
      }
      else if (elemento.tipo === "Granos") {
        granos.appendChild(
          nuevoProduto(
            elemento.name,
            elemento.imageUrl,
            elemento.price,
            elemento.tipo,
            elemento.description,
            elemento.id
          ));
      }
      else if (elemento.tipo === "Mar") {
        mar.appendChild(
          nuevoProduto(
            elemento.name,
            elemento.imageUrl,
            elemento.price,
            elemento.tipo,
            elemento.description,
            elemento.id
          ));
      }
      else if (elemento.tipo === "Verduras") {
        verduras.appendChild(
          nuevoProduto(
            elemento.name,
            elemento.imageUrl,
            elemento.price,
            elemento.tipo,
            elemento.description,
            elemento.id
          ));
      }
    });
  } catch (erro) {
    console.log(erro);
  }
};

render();