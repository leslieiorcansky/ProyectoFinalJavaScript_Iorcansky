const verCarrito = document.getElementById('verCarrito');
const planillaContenido = document.getElementById('planillaContenido');
const cantidadCarrito = document.getElementById('cantidadCarrito');  
  
  const pintarCarrito = () => {    
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
        <div class="card text-dark  " style="width: 18rem;">
                <img class="card-img-top imagenCarrito" src="${producto.img}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p>$${producto.precio}</p>
                    <p>Cantidad: ${producto.cantidad}</p>
                    <button class="btn btn-danger botonSuma"> + </button>
                    <button class="btn btn-danger botonResta"> - </button>
                    </br>
                    <button class="btn btn-danger borrarProducto"> ELIMINAR </button>
                    </div>        
        </div>
    `;
    planillaContenido.append(contenidoCarrito);

    const botonSuma = contenidoCarrito.querySelector(".botonSuma");
    const botonResta = contenidoCarrito.querySelector(".botonResta");

    botonSuma.addEventListener('click', () => {
        producto.cantidad++
        pintarCarrito();
        carritoCounter();
        guardarCarritoStorage();
    });

    botonResta.addEventListener('click', () => { 
        if ( producto.cantidad > 0 ) {
        producto.cantidad--
        pintarCarrito();
        carritoCounter();
        guardarCarritoStorage(); 
        }
    });

    const eliminar = contenidoCarrito.querySelector('.borrarProducto');

    eliminar.addEventListener('click', (event) => {
        event.stopPropagation();
        if (event.target.classList.contains('borrarProducto')) {
            Swal.fire({
                title: `¿Esta seguro que quiere eliminar ${producto.nombre}?`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Eliminar',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                    eliminarProducto(event.target.value);
                    Swal.fire(
                        'Eliminado!',
                        ` ${producto.nombre } ha sido eliminado`,
                        'success'
                    )
                }
            })
        }
    })
});

    const total = carrito.reduce((acc,el) => acc + (el.precio * el.cantidad),0);
    const totalCompra =document.createElement('div');
    totalCompra.className = 'totalContenido';
    totalCompra.innerHTML = `Total a pagar: $${total}`;
    planillaContenido.append(totalCompra);
    };

    verCarrito.addEventListener('click',pintarCarrito);

    const eliminarProducto = () => {
        const foundId = carrito.find((element) =>element.id);
        
        carrito = carrito.filter((carritoId) => {
            return carritoId !== foundId;   
        });
        guardarCarritoStorage();
        carritoCounter();
        pintarCarrito();
    };

    
    const carritoCounter = () => {
        cantidadCarrito.style.display = 'block';
        const totalCantidad = carrito.reduce((acc,item) =>  acc + item.cantidad,0);
        cantidadCarrito.innerText = totalCantidad;
    };

    
   