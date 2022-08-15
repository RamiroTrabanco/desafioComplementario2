let verdadero = true
let falso = false
let total = 0

const productos = []
const carrito = []

class Productos {
    constructor (nombre, valor, stock, id, img){
        this.nombre=nombre
        this.valor=valor
        this.stock=stock
        this.id=id
        this.img=img
    }
}

productos.push(new Productos("Placa de video Geforce 3050 Palit", 70000, 50, 1432, "imgs/rtx-3050-palit.png"))
productos.push(new Productos("Placa de video Geforce 3050 Asus", 75000, 50, 1430, "imgs/rtx-3050.png"))
productos.push(new Productos("Placa de video Geforce 3060 Palit", 90000, 50, 1433, "imgs/rtx-3060-palit.png"))
productos.push(new Productos("Placa de video Geforce 3070ti GigaByte", 150000, 50, 1600, "imgs/rtx-3070ti-gigabyte.png"))
productos.push(new Productos("Placa de Video Asrock AMD Radeon RX 6400", 42000, 50, 1603, "https://www.maximus.com.ar/Temp/App_WebSite/App_PictureFiles/Items/90-GA3CZZ-00UANH_800.jpg"))
productos.push(new Productos("Placa de Video Asrock AMD Radeon RX 6500 XT", 50000, 50, 1606, "https://www.maximus.com.ar/Temp/App_WebSite/App_PictureFiles/Items/90-GA3DZZ-00UANH_800.jpg"))
productos.push(new Productos("Placa de Video AMD Radeon PowerColor Rx 6600", 77000, 50, 1607, "https://www.maximus.com.ar/Temp/App_WebSite/App_PictureFiles/Items/AXRX-6600-8GBD6-3DH_800.jpg"))
productos.push(new Productos("Placa de Video AMD Radeon Rx 6650 XT", 95000, 50, 1608, "https://www.maximus.com.ar/Temp/App_WebSite/App_PictureFiles/Items/GV-R665XTGAMING-OC-8GD_800.jpg"))

function agregarProductosAlDom() {
    let container = document.querySelector(".container");
    productos.forEach( el => {
        let div = document.createElement("div");
        div.className= "card"
        div.innerHTML = `
        <img src=${el.img} />
        <p class="productoTitulo">${el.nombre}</p>
        <p class="productoPrecio negrita">$${el.valor}</p>
        <button id="${el.id}" class="botonComprar">Comprar</button>
        `
    container.append(div)
    })
}

agregarProductosAlDom()


function buscador() {
    let buscar = prompt("Ingrese el producto que esta buscando:")
    const resultadoBusqueda = productos.filter(elemento => elemento.nombre.includes(buscar))
    console.log(resultadoBusqueda)
}