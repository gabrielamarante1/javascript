
function Remera(color, talle, cantidad) {
    this.color = color;
    this.talle = talle;
    this.cantidad = cantidad;
}


function calcularPrecioTotal(remeras) {
    let precioTotal = 0;
    let cantidadTotal = 0;

    remeras.forEach(function(remera) {
        let precioUnitario = 800;

        
        if (remera.cantidad === 2 || remera.cantidad === 3) {
            precioUnitario -= 100;
        } else if (remera.cantidad >= 4) {
            precioUnitario -= 250;
        }

        precioTotal += precioUnitario * remera.cantidad;
        cantidadTotal += remera.cantidad;
    });

    return { precioTotal, cantidadTotal };
}


function determinarTalle(estatura) {
    if (estatura < 173) {
        return "S";
    } else if (estatura >= 173 && estatura <= 185) {
        return "M";
    } else {
        return "L";
    }
}


function ventaRemeras() {
    let nombreUsuario = prompt("Bienvenido/a a nuestra tienda. Por favor, introduce tu nombre:");
    if (!nombreUsuario) {
        alert("Nombre no válido.");
        return;
    }

    let colores = ["blanco", "negro", "beige", "verde"];

    let estatura = parseInt(prompt("Hola, " + nombreUsuario + ". Para ofrecerte la talla adecuada, ¿podrías indicarnos tu estatura en centímetros?"));
    if (isNaN(estatura) || estatura <= 0) {
        alert("La estatura ingresada no es válida.");
        return;
    }

    let talle = determinarTalle(estatura);

    let remeras = [];
    
    while (true) {
        let mensajeColores = "Seleccione el color de las remeras que desea comprar:\n";
        colores.forEach(function(color, index) {
            mensajeColores += (index + 1) + ". " + color + "\n";
        });
        
        let seleccionColor = parseInt(prompt(mensajeColores + "(Ingrese el número correspondiente)"));

        if (isNaN(seleccionColor) || seleccionColor < 1 || seleccionColor > colores.length) {
            alert("La selección de color no es válida.");
            return;
        }

        let colorSeleccionado = colores[seleccionColor - 1];

        let cantidad = parseInt(prompt("Ingrese la cantidad de remeras de color " + colorSeleccionado + " y talle " + talle + " que desea comprar:"));

        if (isNaN(cantidad) || cantidad <= 0) {
            alert("La cantidad ingresada no es válida.");
            return;
        }

        remeras.push(new Remera(colorSeleccionado, talle, cantidad));

        let { precioTotal, cantidadTotal } = calcularPrecioTotal(remeras);

        let continuar = prompt("Compra exitosa:\nCantidad total de remeras: " + cantidadTotal + "\nPrecio total: $" + precioTotal.toFixed(2) + "\n\n¿Desea seleccionar otro color? (Sí/No)").toLowerCase();

        if (continuar !== 'sí' && continuar !== 'si') {
            break;
        }
    }

    alert("Gracias por su compra, " + nombreUsuario + ".");
}


ventaRemeras();