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
const contenedorProductos = document.querySelector("#contenedor-productos")
const botonesCategorias = document.querySelectorAll (".boton-categoria")
const tituloPrincipal = document.querySelector("#titulo-principal")

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

}
cargarProductos(productos)



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
            cargarProductos(productos)
        }
    })
})