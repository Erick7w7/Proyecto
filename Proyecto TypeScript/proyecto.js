"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var mensaje1 = "Tipos de Armas:"; //Por medio del let podemos definir variables, podemos definir el tipo de variable como en este caso usamos una variable de tipo string
console.log(mensaje1); //Mediante el log mandamos a consola los datos de la variable mensaje1
var articulo1 = "M416";
var articulo2 = "Grosa";
var articulo3 = "Awm";
function Mostrar_articulo1() {
    return articulo1;
}
function Mostrar_articulo2() {
    return articulo2;
}
function Mostrar_articulo3() {
    return articulo3;
}
console.log(Mostrar_articulo1());
console.log(Mostrar_articulo2());
console.log(Mostrar_articulo3());
var costo_articulo1 = 400;
var costo_articulo2 = 450;
var costo_articulo3 = 600;
console.log("Precios de armas:");
console.log("M416: " + costo_articulo1 + " dolares");
console.log("Grosa: " + costo_articulo2 + " dolares");
console.log("Awm: " + costo_articulo3 + " dolares");
console.log("Precio de rebaja al llevarse el pack M416 + Grosa:");
var costo = function (costo_art1, costo_art2) { return costo_art1 + costo_art2; }; //Utilizamos una funcion lambda para sumar las 2 variables
console.log("Total: " + costo(400, 400));
var Arma = /** @class */ (function () {
    function Arma(nombre_arma) {
        this.dano = 0;
        this.nombre = nombre_arma; //Mediante el this hacemos que la variable nombre se le asigne a la variable nombre_arma
    }
    Arma.prototype.dano_del_arma = function (dano_arma) {
        this.dano = dano_arma;
        console.log("Daño: " + this.dano);
    };
    return Arma;
}());
var Tipo = /** @class */ (function (_super) {
    __extends(Tipo, _super);
    function Tipo(nombre_arma) {
        var _this = _super.call(this, nombre_arma) //Por medio de esto estaremos utilizando el constructor de la clse Arma
         || this;
        _this.velocidad = 0;
        return _this;
    }
    Tipo.prototype.Tipo_de_arma = function () {
        console.log("Arma: " + this.nombre);
    };
    Tipo.prototype.Velocidad_de_disparo = function (velocidad_disparo) {
        this.velocidad = velocidad_disparo;
        console.log("Velocidad de disparo: " + this.velocidad);
    };
    return Tipo;
}(Arma));
console.log("Atributos de Armas:");
var atributos1 = new Tipo("M416"); //Creamos un objeto al cual le agregamos su nombre y atibuto
atributos1.Tipo_de_arma();
atributos1.dano_del_arma(41);
atributos1.Velocidad_de_disparo(502);
var atributos2 = new Tipo("Grosa"); //X2
atributos2.Tipo_de_arma();
atributos2.dano_del_arma(49);
atributos2.Velocidad_de_disparo(613);
var atributos3 = new Tipo("AWM"); //X3
atributos3.Tipo_de_arma();
atributos3.dano_del_arma(132);
atributos3.Velocidad_de_disparo(65);
