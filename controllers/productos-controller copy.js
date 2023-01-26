import { productoServices } from "../servicios/producto-servicios.js";
import { formatPrice } from "../formatterPrices.js";


const nuevoProduto = (name, imageUrl, price, tipo, description) => {
  const card = document.createElement("div");
  const contenido = `
        <div class="produto">
            <h1 class="product-name"> ${name} </h1>
            <img src="../assets/${imageUrl}" alt="img">        
            <p class="preco">${formatPrice(price)}</p>
            <h1 class="product-tipo"> ${tipo} </h1>
            <p class="descripcion"> ${description}</p>
            <a class="ver-produto" href="../produto.html?id=${id}">Ver Produto</a>
        </div>   
    `;
  card.innerHTML = contenido;
  card.dataset.id = id;

  return card;
};

const mar = document.querySelector("[data-mar]");
const verduras = document.querySelector("[data-verduras]");
const frutas = document.querySelector("[data-frutas]");
const lacteos = document.querySelector("[data-lacteos]");
const granos = document.querySelector("[data-granos]");

const render = async () => {
  try {
    const listaProductos = await productoServices.listaProductos();
      listaProductos.forEach((elemento) => {             
        if(elemento.tipo === "Frutas") {
          frutas.appendChild(
            nuevoProduto(
              elemento.name,
              elemento.imageUrl,
              elemento.price,
              elemento.description
            ));
        } 
        else if(elemento.tipo === "Lacteos") {
          lacteos.appendChild(
            nuevoProduto(
              elemento.name,
              elemento.imageUrl,
              elemento.price,
              elemento.description
            ));
        }
      else if(elemento.tipo === "Granos") {
          granos.appendChild(
            nuevoProduto(
              elemento.name,
              elemento.imageUrl,
              elemento.price,
              elemento.description
            ));
      }
       else if(elemento.tipo === "Mar")
          mar.appendChild(
            nuevoProduto(
              elemento.name,
              elemento.imageUrl,
              elemento.price,
              elemento.description
            ));
      else if(elemento.tipo === "Verduras")
          verduras.appendChild(
              nuevoProduto(
                elemento.name,
                elemento.imageUrl,
                elemento.price,
                elemento.description
              ));
      });
    } catch(erro) {
      console.log(erro);
    }
};

render();