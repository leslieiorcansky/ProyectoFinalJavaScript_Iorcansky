const tienda = document.getElementById('tienda');






let carrito = JSON.parse(localStorage.getItem('carrito')) || [];






//CARDS
const homeController = async () => {
      const response = await fetch('./src/data/stock.json');
      const data = await response.json();

   
data.forEach((producto) => {
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
    carritoCounter();

   Toastify({
        text: `Tu producto ${producto.nombre} fue añadido al carrito`,
        duration: 2000,
        gravity: 'bottom',
        style: {
            background: 'linear-gradient(to right, #F2071B, #D90718)'
        }
    }).showToast();

  });
});
};


homeController();













