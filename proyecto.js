const contenidoTienda = document.getElementById("contenido-tienda")
const verCarrito = document.getElementById("verCarrito")
const contenedorModal = document.getElementById("contenedor-modal")

let carrito = []
productos.forEach((producto)=> {
    let contenidoProducto = document.createElement("div")
    contenidoProducto.className = "tarjeta";
    contenidoProducto.innerHTML = `
    <img src="${producto.img}">
    <h3>${producto.nombre}</h3>
    <p class="precio">${producto.precio} $</p>
    `;
    contenidoTienda.append(contenidoProducto);
    let botonComprar = document.createElement("button")
    botonComprar.innerText = "Comprar";
    botonComprar.className = "boton-comprar";
    contenidoProducto.append(botonComprar);

    botonComprar.addEventListener("click", () =>{
        carrito.push({
            id: producto.id,
            img: producto.img,
            nombre: producto.nombre,
            precio: producto.precio,
        });
    })

});
verCarrito.addEventListener("click", () => {
    contenedorModal.innerHTML = ""
    contenedorModal.style.display = "flex"
    const cabeceraModal = document.createElement("div");
    cabeceraModal.className = "cabecera-modal"
    cabeceraModal.innerHTML = `
        <h1 class="titulo-cabecera-modal">Carrito de Compras</h1>
    `;
    contenedorModal.append(cabeceraModal);

    const botonCerrarModal = document.createElement("h1");
    botonCerrarModal.innerText = "X";
    botonCerrarModal.className = "boton-cerrar-cabecera-modal";

    botonCerrarModal.addEventListener("click", () => {
        contenedorModal.style.display = "none";
    });

    cabeceraModal.append(botonCerrarModal);
    carrito.forEach((producto) => {

    let contenidoCarrito = document.createElement("div");
    contenidoCarrito.className = "contenido-modal";
    contenidoCarrito.innerHTML = `
        <img src="${producto.img}">
        <h3>${producto.nombre}</h3>
        <p>${producto.precio} $</p>
    `;
        contenedorModal.append(contenidoCarrito);
    });

    const total = carrito.reduce((acc, el) => acc + el.precio, 0);
    const totalCompra = document.createElement("div");
    totalCompra.className = "total-contenido";
    totalCompra.innerHTML = `Total a Pagar: ${total} $` ;
    contenedorModal.append(totalCompra);
});