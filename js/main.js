function calcularTalle(estatura) {
    let talleS = "S";
    let talleM = "M";
    let talleL = "L";

    if (estatura < 170) {
        return talleS;
    } else if (estatura >= 170 && estatura < 185) {
        return talleM;
    } else {
        return talleL;
    }
}

function aplicarDescuento(cantidad, precioUnitario) {
    const descuentoPorCantidad = 0.1; // 10% de descuento para 2 o más remeras
    let precioTotal = cantidad * precioUnitario;

    if (cantidad >= 2) {
        precioTotal -= precioTotal * descuentoPorCantidad;
    }

    return precioTotal;
}

// Preguntar cantidad de clientes
const numClientes = parseInt(prompt("¿Cuántas personas quieren realizar un pedido?:"));

for (let i = 0; i < numClientes; i++) {                                         
    let estatura;

    do {
        // Preguntar información
        let nombre = prompt("Ingrese su nombre:");
        let apellido = prompt("Ingrese su apellido:");
        let correo = prompt("Ingrese su correo electrónico:");

        // Mostrar mensaje de bienvenida
        console.log(`Bienvenido ${nombre} ${apellido}!`);

        // Preguntar estatura
        estatura = parseFloat(prompt("Ingrese su estatura en centímetros:"));

        // Validar la estatura
        if (estatura < 130 || estatura > 230) {
            console.log("La estatura ingresada es incorrecta. Por favor, inténtelo de nuevo.");
        }

    }} while (estatura < 130 || estatura > 230); {function calcularTalle(estatura) {
    let talleS = "S";
    let talleM = "M";
    let talleL = "L";

    if (estatura < 170) {
        return talleS;
    } else if (estatura >= 170 && estatura < 185) {
        return talleM;
    } else {
        return talleL;
    }
}}

    // Calcular talle de la/s remeras
    let talleRemera = calcularTalle(estatura);

    // Preguntar cantidad de remeras
    let totalRemeras = parseInt(prompt("¿Cuántas remeras desea comprar?"));

    // Precio por remera
    const precioUnitario = 20; 

    // Precio total
    let precioTotal = aplicarDescuento(totalRemeras, precioUnitario);

    // Resultados
    console.log(`Talle de remera: ${talleRemera}`);
    console.log(`Cantidad de remeras: ${totalRemeras}`);
    console.log(`Precio total: $${precioTotal.toFixed(2)}`);

