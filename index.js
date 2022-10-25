const precioMouse = 5;
const precioTeclado = 4;
const precioWebcam = 6;
const precioHeadest = 3;
const precioMonitor = 2;

let flag; // variable para indicar si quiere pedir otro producto
let total = 0; // variable que almacena el total de la factura
let opcionErrorList = false; // variable que me indica si la persona coloca una opción diferente a la mostrada 

function opcionCompra () {
    let compra = prompt (`Ingrese la opcion del producto a compra
            1. Mouse
            2. Teclado
            3. Webcam 
            4. Auriculares
            5. Monitor
            6. Nada
            `);
    return compra;
}
do {
    let buy;
    buy = opcionCompra();
    if (!opcionErrorList) {
        switch (buy){
            case "1":
                    total = total + precioMouse;
                break;
            case "2":
                total = total + precioTeclado;
                break;
            case "3":
                total = total + precioWebcam;
                break;
            case "4":
                total = total + precioHeadest;
                break;
            case "5":
                total = total + precioMonitor;
                break;
            case "6":
                break;
            default:
                opcionErrorList = true;
        }
        if (opcionErrorList) {
            alert("Ingrese una opción valida");
            opcionErrorList = false;
            flag = "Y";
            continue;
            }
    }
    flag = prompt("Quiere seguir comprando? Y/N"); // hace falta validar que solo se pueda ingresar Y o N
    console.log("flag ", flag);
}
while (flag == "Y");
console.log("Total ", total);

