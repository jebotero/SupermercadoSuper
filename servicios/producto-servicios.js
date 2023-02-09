//GET
const listaProductos = () =>
  fetch(`http://localhost:3000/producto`)
    .then((resposta) => resposta.json())
    .catch((error) => console.log(error));

const listarPorTipo = (tipo) =>
  fetch(`http://localhost:3000/producto`)
    .then(async (resposta) => {
      const data = await resposta.json();
      const filteredData = data.filter((item) => {
        return item.tipo == tipo;
      });
      return filteredData;
    })
    .catch((error) => console.log(error));

const listarTipos = () => 
  fetch(`http://localhost:3000/producto`)
    .then(async (resposta) => {
      const data = await resposta.json();
      var tipos = data.reduce(function (arreglo, linea) {
        if (arreglo.indexOf(linea.tipo) === -1) {
          arreglo.push(linea.tipo);
        }
        return arreglo;
     }, []);
 
      return tipos;
    })
    .catch((error) => console.log(error));


const listarUnProduto = (id) =>
  fetch(`http://localhost:3000/producto/${id}`)
    .then((resposta) => resposta.json())
    .catch((error) => console.log(error));

//POST
const creaProdutos = (name, imageUrl, price, tipo, description) => {
  return fetch(`http://localhost:3000/producto`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      imageUrl,
      price,
      tipo,
      description
    }),
  }).then((resposta) => {
    if (resposta.ok) {
      return resposta.body;
    }
    throw new Error("No fue posible crear un producto");
  });
};

// PUT/PATCH
const alteraProduto = async (id, name, imageUrl, price, tipo, description) => {
  return fetch(`http://localhost:3000/producto/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      imageUrl,
      price,
      tipo,
      description
    }),
  })
    .then((resposta) => {
      return resposta.json();
    })
    .catch((error) => console.log(error));
};

// DELETE
const deleteProducto = async (id) => {
  return await fetch(`http://localhost:3000/producto/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const productoServices = {
  listaProductos,
  listarUnProduto,
  creaProdutos,
  alteraProduto,
  deleteProducto,
  listarPorTipo,
  listarTipos
};
