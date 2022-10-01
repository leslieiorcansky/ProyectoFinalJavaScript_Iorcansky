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

carritoCounter();


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
  guardarCarritoStorage();
  console.log(carrito);
  carritoCounter();
});
});













