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
    <h1> 
    <img src='${producto.img}'> </br>
    ${producto.nombre} </br>
    $${producto.precio} </br>
    Cantidad: ${producto.cantidad} </br>
    Total: ${producto.cantidad * producto.precio}
    </h1>           
    `;
    planillaContenido.append(contenidoCarrito);

    console.log(carrito.length);

    let eliminar = document.createElement('span');
    eliminar.innerText = '❌';
    eliminar.className = 'borrarProducto';
    contenidoCarrito .append(eliminar);

    // eliminar.addEventListener('click', eliminarProducto);

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
                        'El producto ha sido eliminado',
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
        console.log(carrito);
        carritoCounter();
        pintarCarrito();
    };

    
    const carritoCounter = () => {
        cantidadCarrito.style.display = 'block';
        cantidadCarrito.innerText = carrito.length;
    };