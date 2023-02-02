function validarLogin () {
    //leer los datos del formulario
    var username = document.getElementById("username").value; 
    var password = document.getElementById("password").value;

//carga los datos de la base de datos JSON
fetch(`http://localhost:3000/usuarios`)
    .then((respuesta) => respuesta.json())
    .then((data) => {
        //recorre la base de datos y busca una coincidencia, permite al usuario acceder    
        for (var i = 0; i < data.length; i++) {
            if(data[i].username === username && data[i].password === password) {
            //si se encuentra una coincidencia, permite al usuario acceder
                window.location.href = "../screens/produto.html";
                return;
            } else {
                //si no se encuentra una coincidencia,  muestra mensaje de error
                alert("Nombre de usuario o contraseña incorrectos")
            }
        }    
    });
}