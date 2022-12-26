//Hago uso deel local storage para trabajar con la informacion que se alamaceno en el carrito
let productosEnCarrito = localStorage.getItem("productos-en-carrito")
productosEnCarrito = JSON.parse(productosEnCarrito)
// interaccion con el DOM
const contenedorCarritoVacio = document.querySelector("#carrito-vacio")
const contenedorCarritoProductos = document.querySelector("#carrito-productos")
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones")
const contenedorCarritoComprado = document.querySelector("#carrito-comprado")
let botonesEliminar = document.querySelectorAll( ".carrito-producto-eliminar")
const botonVaciar = document.querySelector("#carrito-acciones-vaciar");
const contenedorTotal = document.querySelector("#total");
const botonComprar = document.querySelector("#carrito-acciones-comprar");

// Agrego los productos al carrito
function cargarProductosCarrito () {
    if (productosEnCarrito && productosEnCarrito.length > 0) {
        contenedorCarritoVacio.classList.add("disabled")
        contenedorCarritoProductos.classList.remove("disabled")
        contenedorCarritoAcciones.classList.remove("disabled")
        contenedorCarritoComprado.classList.add("disabled")

        contenedorCarritoProductos.innerHTML = ""

        productosEnCarrito.forEach((producto) => {
        const div = document.createElement("div")
        div.classList.add("carrito-producto")
        div.innerHTML = `
            <img class="carrito-producto-imagen" src=${producto.imagen} alt=${producto.titulo}>
                        <div class="carrito-producto-titulo">
                            <small>Titulo</small>
                            <h3>${producto.titulo} </h3>
                        </div>
                        <div class="carrito-producto-cantidad">
                            <small>Cantidad</small>
                            <p>${producto.cantidad}</p> 
                        </div>
                        <div class="carrito-producto-precio">
                            <small>Precio</small>
                            <p>${producto.precio} </p> 
                        </div>
                        <div class="carrito-producto-subtotal">
                            <small>Subtotal</small>
                            <p>${producto.precio * producto.cantidad} </p> 
                        </div>
                        <button class="carrito-producto-eliminar" id =${producto.id} > <i class="bi bi-trash-fill"></i> </button>
        `
        contenedorCarritoProductos.append(div)
    })
    } else {
        contenedorCarritoVacio.classList.remove("disabled")
        contenedorCarritoProductos.classList.add("disabled")
        contenedorCarritoAcciones.classList.add("disabled")
        contenedorCarritoComprado.classList.add("disabled")
    
    }
    actualizarBotonesEliminar()
    actualizarTotal()
}

cargarProductosCarrito ()


function actualizarBotonesEliminar() {
    botonesEliminar = document.querySelectorAll (".carrito-producto-eliminar")

    botonesEliminar.forEach (boton => {
        boton.addEventListener("click", eliminarDelCarrito)
    })
}
function eliminarDelCarrito(e) {
    //Librerias
    Toastify({
        text: "Se eliminó producto del carrito",
        duration: 3000,
        destination: "./carrito.html",
        newWindow: true,
        close: true,
        gravity: "top", 
        position: "right", 
        stopOnFocus: true, 
        style: {
            background: "red",
        },
        onClick: function(){} 
        }).showToast();

    const idBoton = e.currentTarget.id
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton)
    productosEnCarrito.splice(index, 1)
    cargarProductosCarrito()
    //Actualizo el local storage de los productos eliminados
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito))
}

//Quito todos los productos del carrito como tambien en el local storage
botonVaciar.addEventListener("click", vaciarCarrito);
function vaciarCarrito() {
    Swal.fire({
        icon: 'success',
        title: 'Carrito vacio',
        confirmButtonText: 'Aceptar',
    })
    productosEnCarrito.length = 0;
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    cargarProductosCarrito();
}

// actualizo el total calculado por todos los productos en el carrito
function actualizarTotal() {
    const totalCalculado = productosEnCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    total.innerText = `$${totalCalculado}`
}

//Reinicio la compra y limpio el local storage
botonComprar.addEventListener("click", comprarCarrito);
function comprarCarrito() {
    //Librerias
    Swal.fire({
        icon: 'success',
        title: 'Gracias por tu compra',
        confirmButtonText: 'Aceptar',
    })

    productosEnCarrito.length = 0;
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    
    contenedorCarritoVacio.classList.add("disabled");
    contenedorCarritoProductos.classList.add("disabled");
    contenedorCarritoAcciones.classList.add("disabled");
    contenedorCarritoComprado.classList.remove("disabled");
}
