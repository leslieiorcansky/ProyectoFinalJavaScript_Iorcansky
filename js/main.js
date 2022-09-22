const tienda = document.getElementById('tienda');
const verCarrito = document.getElementById('verCarrito');
const planillaContenido = document.getElementById('planillaContenido');

let carrito = [];

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

cards.append(comprar);

comprar.addEventListener('click', () => {
  carrito.push({
    id: producto.id,
    img: producto.img,
    nombre: producto.nombre,
    precio: producto.precio,
  })
  console.log(carrito);
});
});


verCarrito.addEventListener('click', () => {
  planillaContenido.innerHTML = '';
  planillaContenido.style.display = 'flex';
  const planillaHeader = document.createElement('div');
  planillaHeader.className = 'PlanillaHeader';
  planillaHeader.innerHTML = `
  <h1 class='planillaHeaderTitulo'>CARRITO DE COMPRAS:</h1>
  `
  planillaContenido.append(planillaHeader);

  const planillaboton = document.createElement('h1');
  planillaboton.innerText = 'x';
  planillaboton.className = 'planillaBotonHeader';

  planillaboton.addEventListener('click', () => {
    planillaContenido.style.display = 'none';
  });

  planillaHeader.append(planillaboton);

  carrito.forEach((producto) => {
  let contenidoCarrito = document.createElement('div');
  contenidoCarrito.className = 'PlanillaContenido';
  contenidoCarrito.innerHTML = `
    <img src='${producto.img}'>
    <h3>${producto.nombre}</h3>
    <p> $${producto.precio}</p>
  `;
  planillaContenido.append(contenidoCarrito);
  })

  const total = carrito.reduce((acc,el) => acc + el.precio,0);
  const totalCompra =document.createElement('div');
  totalCompra.className = 'totalContenido';
  totalCompra.innerHTML = `Total a pagar: $${total}`;
  planillaContenido.append(totalCompra);
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
