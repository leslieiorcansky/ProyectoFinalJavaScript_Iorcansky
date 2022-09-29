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
