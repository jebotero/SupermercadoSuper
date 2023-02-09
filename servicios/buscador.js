import { productoServices } from "./producto-servicios.js";
import { formatPrice } from "../formatterPrices.js";

//referenciamos a los elementos del DOM
const inputBuscar = document.getElementById('buscar')
const celdas = document.getElementsByTagName('td')

//traemos los datos desde una API
let uri = 'https://localhost:3000/producto'
fetch(uri)
    .then( response => response.json() )
    .then( json => mostrarDatos(json) )
    .catch( e => console.log(e) )

const mostrarDatos = (data) => {
    //console.log(data)
    let body=''
    for(let i=0; i<data.length; i++){
        body += `
        <div class="produto">
            <h1 class="product-name"> ${name} </h1>
            <img src="./assets/${imageUrl}" alt="img">        
            <p class="preco">${formatPrice(price)}</p>
            <h1 class="product-tipo"> ${tipo} </h1>
            <p class="descripcion"> ${description}</p>
            
            <a class="ver-producto" href="./screens/mostrar-producto.html?id=${id}">Ver Produto</a>
        </div>   
        `
    }
    document.querySelector('.datos').innerHTML = body
}    

//Búsqueda
inputBuscar.addEventListener('keyup', (e)=>{
    let texto = e.target.value
    //console.log(texto)
    let er = new RegExp(texto, "i")
    for(let i=0; i<celdas.length; i++) {
        let valor = celdas[i]
        //console.log(valor)
        if(er.test(valor.innerText)){
            valor.classList.remove("ocultar")
        }else{
            console.log(valor)
            valor.classList.add("ocultar")
        }
    }
})
