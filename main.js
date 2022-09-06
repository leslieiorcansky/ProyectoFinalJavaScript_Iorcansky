const producto1 = 'Remera';

const producto2 = 'Jean';

const producto3 = 'Campera';

let eleccionProducto = Number(

  prompt(

    'Digite el numero correspondiente al producto' +

      'que desea elegir: \n1. ' +

      producto1 +

      '\n2. ' +

      producto2 +

      '\n3. ' +

      producto3

  )

);



function producto() {

  let precioPro = 0;

  switch (eleccionProducto) {

    case 1:

      precioPro = 100;
      alert('El producto seleccionado es: ' + producto1 + ' y el precio es: ' + precioPro);

      alert('Gracias por su compra');

      break;

    case 2:

      precioPro = 200;

      alert('El producto seleccionado es: ' + producto2 + ' y el precio es: ' + precioPro);

      alert('Gracias por su compra');

      break;

    case 3:

      precioPro = 300;

      alert('El producto seleccionado es: ' + producto3 + ' y el precio es: ' + precioPro);

      alert('Gracias por su compra');

      break;

    default:

      alert('El producto seleccionado no existe');

      break;

  }

}

producto();