"use strict";
var articulo = "Television";
function mostrar_producto() {
    return articulo;
}
var descuento = function () {
    return false;
};
console.log(mostrar_producto());
console.log(descuento());
//Funciones con parametros obligatorios
function DetalleProducto(modelo, tamano) {
    return modelo + " " + tamano + " Pulgadas.";
}
var detalle = DetalleProducto("SmartTV", 70);
console.log(detalle);
//Parametros opcionales
function Envios(direccion, costo) {
    if (costo) {
        return direccion + " Costo: " + costo + " pesos.";
    }
    else {
        return direccion;
    }
}
var envio = Envios("Lo de jesus 34", 110);
console.log(envio);
