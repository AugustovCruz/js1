const productos = [
    // Productos en venta
    {
        id: "01",
        titulo: "Bunge Cougar",
        imagen: "./img/bungecougar.jpg",
        categoria: {
            nombre: "Otros",
            id: "Otros"
        },
        precio: 1000
    },
    {
        id: "02",
        titulo: "Combo Redragon",
        imagen: "./img/comboredragon.jpg",
        categoria: {
            nombre: "combo",
            id: "Otros"
        },
        precio: 1000
    },
    {
        id: "03",
        titulo: "Logitech gpro",
        imagen: "./img/gpro.jpg",
        categoria: {
            nombre: "Mouse",
            id: "Mouses"
        },
        precio: 1000
    },
    {
        id: "04",
        titulo: "Auriculares Hyperx",
        imagen: "./img/headhyperx.jpg",
        categoria: {
            nombre: "Auriculares",
            id: "Otros"
        },
        precio: 1000
    },
    {
        id: "05",
        titulo: "Joystick",
        imagen: "./img/joystick.jpg",
        categoria: {
            nombre: "Joystick",
            id: "Otros"
        },
        precio: 1000
    },
    {
        id: "06",
        titulo: "Teclado Redragon",
        imagen: "./img/keyboardredragon.jpg",
        categoria: {
            nombre: "teclado",
            id: "Otros"
        },
        precio: 1000
    },
    {
        id: "07",
        titulo: "Monitor ",
        imagen: "./img/monitor.jpg",
        categoria: {
            nombre: "Monitor",
            id: "Monitores"
        },
        precio: 1000
    },
    {
        id: "08",
        titulo: "Monitor en oferta",
        imagen: "./img/monitorOff.png",
        categoria: {
            nombre: "monitor off",
            id: "Monitores"
        },
        precio: 1000
    },
    {
        id: "09",
        titulo: "Mouse g403",
        imagen: "./img/mouseLogitech.jpg",
        categoria: {
            nombre: "G403",
            id: "Mouses"
        },
        precio: 1000
    },
    {
        id: "10",
        titulo: "Mousepad Stellseries",
        imagen: "./img/padstell.jpg",
        categoria: {
            nombre: "padstell",
            id: "Otros"
        },
        precio: 1000
    },
    {
        id: "11",
        titulo: "Teclado",
        imagen: "./img/teclado-hyperx.png",
        categoria: {
            nombre: "teclado-hyperx",
            id: "Otros"
        },
        precio: 1000
    },
    {
        id: "12",
        titulo: "Placa de video",
        imagen: "./img/video.png",
        categoria: {
            nombre: "Placa de video",
            id: "Otros"
        },
        precio: 1000
    },
]

// Interaccion con el DOM 
const contenedorProductos = document.querySelector("#contenedor-productos")
const botonesCategorias = document.querySelectorAll (".boton-categoria")
const tituloPrincipal = document.querySelector("#titulo-principal")
let botonesAgregar = document.querySelectorAll (".producto-agregar")
const numerito = document.querySelector ("#numerito")

// Hago uso del Fetch
let productosJson = []
fetch("./js/productos.json")
    .then (response => response.json())
    .then (data =>  {
        productosJson = data
        cargarProductos(productosJson)
    })

// Cargo productos a travez de un array 
function cargarProductos(productosElegidos) {
    
    contenedorProductos.innerHTML = ""

    productosElegidos.forEach( producto => {
        
        const div = document.createElement("div")
        div.classList.add("producto")
        div.innerHTML= `
        <div class="producto">
        <img class="producto-image" src="${producto.imagen}" alt="${producto.titulo}">
        <div class="producto-detalles">
            <h3 class="producto-monitor">${producto.titulo}</h3>
            <p class="producto-precio">${producto.precio}</p>
            <button class="producto-agregar" id="${producto.id}" >Agregar</button>
        </div>
        </div>
        `
        contenedorProductos.append(div)
    })
    //Actualizo los botones para que no se pierdan cada que vuelvo a cargar un nuevo producto
    actualizarBotonesAgregar()
    
}
cargarProductos(productosJson)

//Uso valores ternarios en el buscador
document.addEventListener("keyup", e=> {

    const buscador= (e.target.value || "" ).toLowerCase()
    const productosFiltrados = buscador ? productos.filter(producto => producto.titulo.toLowerCase().includes(buscador)) : productos
    cargarProductos(productosFiltrados)
})

botonesCategorias.forEach(boton =>{
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active") )
        e.currentTarget.classList.add("active")

        if(e.currentTarget.id != "Todos"){
            const productoCategoria = productos.find (producto => producto.categoria.id === e.currentTarget.id)

            tituloPrincipal.innerText =productoCategoria.categoria.nombre
            const productosBoton = productos.filter ( producto => producto.categoria.id === e.currentTarget.id)
            cargarProductos(productosBoton)}
        else {
            tituloPrincipal.innerText = "Todos los productos"
            cargarProductos(productos)
        }
    })
})

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll (".producto-agregar")

    botonesAgregar.forEach (boton => {
        boton.addEventListener("click", agregarAlCarrito)
    })
}

// Creo un array para ir guardandolos en el carrito

let productosEnCarrito

const productosEnCarritoLS = localStorage.getItem("productos-en-carrito")
if (productosEnCarritoLS){
    productosEnCarrito = JSON.parse(productosEnCarritoLS)
    actualizarNumerito()
} else {
    productosEnCarrito = []
}


//Agrego productos al array para el carrito
function agregarAlCarrito(e) {
    //Uso de librerias
    Toastify({
        text: "Se agregó producto al carrito",
        duration: 3000,
        destination: "./carrito.html",
        newWindow: true,
        close: true,
        gravity: "top", 
        position: "right", 
        stopOnFocus: true, 
        style: {
            background: "blue",
        },
        onClick: function(){} 
        }).showToast();

    const idBoton= e.currentTarget.id
    const productoAgregado = productos.find(producto => producto.id === idBoton)
    if(productosEnCarrito.some(producto => producto.id === idBoton)){
        const index = productosEnCarrito.findIndex(producto =>producto.id === idBoton)
        productosEnCarrito[index].cantidad++
    }else{
        productoAgregado.cantidad= 1
        productosEnCarrito.push(productoAgregado)
        
    }
    actualizarNumerito()
    //Uso el local storage para almacenar en el carrito los productos elegidos
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito))
    
}

//Sumo las cantidades que se eligen en el producto-agregar
function actualizarNumerito () {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0)
    numerito.innerText= nuevoNumerito
}

