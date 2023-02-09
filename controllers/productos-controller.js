import { productoServices } from "../servicios/producto-servicios.js";
import { formatPrice } from "../formatterPrices.js";

const nuevoTitulo = (tipo) => {
  const div = document.createElement("div");
  const contenido = `
        <div class="prod-titulo" titulo-${tipo}>
          <div class="titulo">
            <p>${tipo}</p>
          </div>
        </div>
        <section class="sessao-produtos" data-${tipo}></section>
        `;
  div.innerHTML = contenido;
  return div;
}

const nuevoProduto = (name, imageUrl, price, description, id) => {
  const card = document.createElement("div")
  const contenido = `
        <div class="produto">
            <h1 class="product-name"> ${name} </h1>
            <img src="./assets/${imageUrl}" alt="img">        
            <p class="preco">${formatPrice(price)}</p>
            <p class="descripcion"> ${description}</p>            

            <a class="ver-producto" href="./screens/mostrar-producto.html?id=${id}">Ver Produto</a>
        </div>   
        `;
  card.innerHTML = contenido;
  card.dataset.id = id;

  return card;
};

const render = async () => {
  try {
    const tipos = await productoServices.listarTipos();
    const contenido = document.querySelector("[contenido]"); 
    tipos.forEach(async (tipo) => {  
      contenido.appendChild(nuevoTitulo(tipo));
    });

    tipos.forEach(async(tipo) => {
      const resultados = await productoServices.listarPorTipo(tipo);
      const seccion = document.querySelector("[data-"+tipo+"]"); 
      resultados.forEach((elemento) => {
        seccion.appendChild(
          nuevoProduto(
            elemento.name,
            elemento.imageUrl,
            elemento.price,
            elemento.description,
            elemento.id
          ));
      });
    });
  } catch (erro) {
    console.log(erro);
  }
};

render();