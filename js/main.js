const productos = [
    // Productos en venta
    {
        id: "01",
        titulo: "Bunge Cougar",
        imagen: "./img/bungecougar.jpg",
        categoria: {
            nombre: "Otros",
            id: "bunge"
        },
        precio: 1000
    },
    {
        id: "02",
        titulo: "Combo Redragon",
        imagen: "./img/comboredragon.jpg",
        categoria: {
            nombre: "Otros",
            id: "combo"
        },
        precio: 1000
    },
    {
        id: "03",
        titulo: "Logitech gpro",
        imagen: "./img/gpro.jpg",
        categoria: {
            nombre: "Mouse",
            id: "Mouse"
        },
        precio: 1000
    },
    {
        id: "04",
        titulo: "Auriculares Hyperx",
        imagen: "./img/headhyperx.jpg",
        categoria: {
            nombre: "Otros",
            id: "Auriculares"
        },
        precio: 1000
    },
    {
        id: "05",
        titulo: "Joystick",
        imagen: "./img/joystick.jpg",
        categoria: {
            nombre: "Otros",
            id: "Joystick"
        },
        precio: 1000
    },
    {
        id: "06",
        titulo: "Teclado Redragon",
        imagen: "./img/keyboardredragon.jpg",
        categoria: {
            nombre: "Otros",
            id: "teclado"
        },
        precio: 1000
    },
    {
        id: "07",
        titulo: "Monitor ",
        imagen: "./img/monitor.jpg",
        categoria: {
            nombre: "Monitores",
            id: "monitor"
        },
        precio: 1000
    },
    {
        id: "08",
        titulo: "Monitor en oferta",
        imagen: "./img/monitorOff.png",
        categoria: {
            nombre: "Monitores",
            id: "monitor off"
        },
        precio: 1000
    },
    {
        id: "09",
        titulo: "Mouse g403",
        imagen: "./img/mouseLogitech.jpg",
        categoria: {
            nombre: "Mouses",
            id: "g403"
        },
        precio: 1000
    },
    {
        id: "10",
        titulo: "Mousepad Stellseries",
        imagen: "./img/padstell.jpg",
        categoria: {
            nombre: "Otros",
            id: "padstell"
        },
        precio: 1000
    },
    {
        id: "11",
        titulo: "Teclado",
        imagen: "./img/teclado-hyperx.png",
        categoria: {
            nombre: "Otros",
            id: "teclado-hyperx"
        },
        precio: 1000
    },
    {
        id: "12",
        titulo: "Placa de video",
        imagen: "./img/video.png",
        categoria: {
            nombre: "otros",
            id: "abrigos"
        },
        precio: 1000
    },
]
const contenedorProductos = document.querySelector("#contenedor-productos")

function cargarProductos() {
    productos.forEach( producto => {
        
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
cargarProductos();
