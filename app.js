const tienda = document.getElementById('tienda');
const verCarrito = document.getElementById('verCarrito');
const planillaContenido = document.getElementById('planillaContenido');
const cantidadCarrito = document.getElementById('cantidadCarrito');





let carrito = JSON.parse(localStorage.getItem('carrito')) || [];






//CARDS
productos.forEach((producto) => {
  let cards = document.createElement('div');
  cards.className = 'card';
  cards.innerHTML = `
  <img src='${producto.img}'>
  <h5 class ='nombre' >${producto.nombre}</h5>
  <p class='precio'>$ ${producto.precio}</p>
  `;
tienda.append(cards);

let comprar = document.createElement('button');
comprar.innerText = 'AÑADIR AL CARRITO';
comprar.className = 'btn btn-danger buscador';
// comprar.id = `button${producto.id}`;

cards.append(comprar);

comprar.addEventListener('click', () => {

const repetir = carrito.some((repetirProducto) => repetirProducto.id === producto.id);

if(repetir){
  carrito.map((prod) => {
    if(prod.id === producto.id){
      prod.cantidad++;
    }
  });
}else {
  carrito.push({
    id: producto.id,
    img: producto.img,
    nombre: producto.nombre,
    precio: producto.precio,
    cantidad: producto.cantidad,
  });
}
  localStorage.setItem('carrito',  JSON.stringify(carrito));
  console.log(carrito);
  carritoCounter();
});
});













//BUSCADOR
const buscador =document.getElementById('buscador');
const resultado = document.getElementById('resultado');
const bars_search = document.getElementById("ctn-bars-search");
const cover_ctn_search =  document.getElementById("cover-ctn-search");

const filtrar = () => {
  resultado.innerHTML = '';

  const texto = buscador.value.toLowerCase();

  for(let producto of productos){
    let nombre = producto.nombre.toLowerCase();
    if(nombre.indexOf(texto) !== -1){
      resultado.innerHTML += `
      <li>${producto.nombre}      $${producto.precio}      <img src='${producto.img}'> </li>
      `
    }
  }
  if(resultado.innerHTML === ''){
    resultado.innerHTML += `
    <li>Producto no encontrado</li>
    `
  }
  if(buscador.value == ''){
    resultado.innerHTML  = '';
  };
}

buscador.addEventListener('keyup', filtrar)

filtrar();
ocultar_buscador();

function ocultar_buscador(){
  bars_search.style.top = "-10px";
  resultado.innerHTML = '';
  buscador.value = "";
}


buscador.addEventListener('click',ocultar_buscador);
