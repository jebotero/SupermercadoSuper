//GET
const leerUsuarios = (id) => {
    return fetch(`http://localhost:3000/usuarios/${id}`)
    .then((respuesta) => {
      return respuesta.json();
    });
  };

//POST
const creaUsuarios = (usuario, email, clave) => {
  return fetch(`http://localhost:3000/usuarios`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      usuario,
      email,
      clave
    }),
  }).then((resposta) => {
    if (resposta.ok) {
      return resposta.body;
    }
    throw new Error("No fue posible crear un producto");
  });
};

// PUT/PATCH
const alteraUsuario = async (usuario, email, clave, id) => {
  return fetch(`http://localhost:3000/usuarios/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      usuario,
      email,
      clave,
    }),
  })
    .then((resposta) => {
      return resposta.json();
    })
    .catch((error) => console.log(error));
};

// DELETE
const deleteUsuario = async (id) => {
  return await fetch(`http://localhost:3000/usuarios/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const usuarioServicios = {
  leerUsuarios,
  creaUsuarios,
  alteraUsuario,
  deleteUsuario
};
