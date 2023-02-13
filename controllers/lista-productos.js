import { productoServices } from "../servicios/producto-servicios.js";
import { formatPrice } from "../formatterPrices.js";

const nuevoTitulo = (tipo) => {
  const div = document.createElement("div");
  const contenido = `
        <div class="prod-titulo" titulo-${tipo}>
          <div class="titulo">
            <h1>${tipo}</h1>
          </div>
        </div>
        <section class="sessao-produtos" data-${tipo}></section>
        `;
  div.innerHTML = contenido;
  return div;
}

const nuevoProduto = (name, imageUrl, price, description, id) => {
  const card = document.createElement("div");
  const contenido = `
    <div class="produto">
        <h1 class="product-name"> ${name} </h1>
        <img src="${imageUrl}" alt="img">
        <p class="preco">${formatPrice(price)}</p>
        <p class="descripcion"> ${description}</p>

        <div class="container">
            <button class="buttonDelete" type="button">
              <img class="deleteImage" src="../assets/delete.png" alt="Deletar" />
            </button>
              
            <a href="../screens/edit-product.html?id=${id}">
              <button class="buttonEdit" type="button">
                <img class="editImage" src="../assets/edit.png" alt="Editar" />
              </button>
            </a>
        </div>

    </div>
    `;
  card.innerHTML = contenido;
  card.dataset.id = id;
  
  return card;
};

const productos = document.querySelector("[contenido]");

productos.addEventListener("click", async (evento) => {
  let deleteButton = evento.target.className === "deleteImage";
  if (deleteButton) {
    const producto = evento.target.closest("[data-id]");
    let id = producto.dataset.id;
    productoServices
      .deleteProducto(id)
      .then((res) => {
        producto.remove();
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
});

const render = async () => {
  try {
    const tipos = await productoServices.listarTipos();
    const contenido = document.querySelector("[contenido]"); 
    tipos.forEach(async (tipo) => {  
      contenido.appendChild(nuevoTitulo(tipo));
    });

    tipos.forEach(async (tipo) => {
    const resultados = await productoServices.listarPorTipo(tipo);
    const seccion = document.querySelector("[data-"+tipo+"]"); 
    resultados.forEach((producto) => {
      seccion.appendChild(
        nuevoProduto(
          producto.name,
          producto.imageUrl,
          producto.price,
          producto.description,
          producto.id
        ));
      });
    });
  } catch (error) {
    console.log(error);
  }
};

render();
