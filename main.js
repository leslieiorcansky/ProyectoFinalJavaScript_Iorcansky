
const productos = [
  {
    nombre: 'Lightening Face Cream',
    precio: 4120,
  },
  {
    nombre: 'Hand Cream',
    precio: 1540,
  },
  {
    nombre: 'Brightening Serum',
    precio: 3670,
  },
  {
    nombre: 'Firming Body Cream',
    precio: 3100,
  },
  {
    nombre: 'Plasma Infusion Serum',
    precio: 3160,
  },
];

let carrito = [];

let seleccion = prompt('Bienvenidos a Lidherma! ¿Desea comprar algo? si o no');

while (seleccion != 'si' && seleccion !='SI' && seleccion != 'no' && seleccion != 'NO') {
  alert('por favor ingresa si o no');
  seleccion = prompt('Bienvenidos a Lidherma! ¿Desea comprar algo? si o no');
}

if (seleccion == 'si') {
  alert('A continuación la lista de productos');
  let todosLosProductos = productos.map((producto) => producto.nombre + ' ' + '$' + producto.precio);
  alert(todosLosProductos.join(' - '));
} else if (seleccion == 'no') {
  alert('¡Gracias por visitar nuestra página! Te esperamos pronto!');
}

while (seleccion != 'no') {
  let producto = prompt('Escribe el producto que desea comprar: 1- Lightening Face Cream 2- Hand Cream 3- Brightening Serum 4-Firming Body Cream 5- Plasma Infusion Serum');
  let precio = 0;

  if (
    producto == 'Lightening Face Cream' ||
    producto == 'Hand Cream' ||
    producto == 'Brightening Serum' ||
    producto == 'Firming Body Cream' ||
    producto == 'Plasma Infusion Serum'
  ) {
    switch (producto) {
      case 'Lightening Face Cream':
        precio = 4120;
        break;
      case 'Hand Cream':
        precio = 1540;
        break;
      case 'Brightening Serum':
        precio = 3670;
        break;
      case 'Firming Body Cream':
        precio = 3100;
        break;
      case 'Plasma Infusion Serum':
        precio = 3160;
        break;
      default:
        alert('No tenemos el producto ingresado. ¿Desea ingresar otro?');
        break;
    }
    let unidades = Number(prompt('¿Cuantas unidades de ese producto queres llevar?'));
    carrito.push({ producto, unidades, precio });
  } else {
    alert('No tenemos ese producto');
  }

  seleccion = prompt('¿Quiere seguir comprando? si o no');

  while (seleccion == 'no') {
    alert('¡Gracias por la compra!');

    carrito.forEach((carritoFinal) => {
      console.log(
        `producto ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar por producto: ${
          carritoFinal.unidades * carritoFinal.precio
        }`
      );
    });
    break;
  }
}

const total = carrito.reduce((acc, producto) => acc + producto.precio * producto.unidades, 0);
console.log(`el total a pagar por su compra es de: ${total}`);

