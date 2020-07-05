let mensaje1:string = "Tipos de Armas:"; //Por medio del let podemos definir variables, podemos definir el tipo de variable como en este caso usamos una variable de tipo string
console.log(mensaje1); //Mediante el log mandamos a consola los datos de la variable mensaje1

let articulo1:string = "M416";
let articulo2:string = "Grosa";
let articulo3:string = "Awm";

function Mostrar_articulo1():string{  //Creamos una funcion Mostrar_articulo1 que retorna el valor que tenemos en nuestra variable articulo1
    return articulo1;
}

function Mostrar_articulo2():string{ //X2
    return articulo2;
}

function Mostrar_articulo3():string{ //X3
    return articulo3;
}

console.log(Mostrar_articulo1());
console.log(Mostrar_articulo2());
console.log(Mostrar_articulo3());

let costo_articulo1:number = 400;
let costo_articulo2:number = 450;
let costo_articulo3:number = 600;

console.log("Precios de armas:")
console.log("M416: " + costo_articulo1 + " dolares");
console.log("Grosa: " + costo_articulo2 + " dolares");
console.log("Awm: " + costo_articulo3 + " dolares");

console.log("Precio de rebaja al llevarse el pack M416 + Grosa:")
var costo = (costo_art1:number, costo_art2:number) => costo_art1+costo_art2; //Utilizamos una funcion lambda para sumar las 2 variables

console.log("Total: "+ costo(400,400));

class Arma { //Por medio del class creamos una clase, en este caso se llama Arma

    nombre:string;
    dano:number=0;
    
    constructor(nombre_arma:string){ //Creamos un constructor en el cual creamos una variable, este constructor sera llamado cuando creemos un objeto de la clase arma
    this.nombre = nombre_arma; //Mediante el this hacemos que la variable nombre se le asigne a la variable nombre_arma
    }
    
    dano_del_arma(dano_arma:number){ //Creamos un metodo llamado dano_arma, el cual almacenera el valor del daño de las diferentes armas
        this.dano = dano_arma;
        console.log("Daño: " + this.dano);
    }
    
    }
    
    class Tipo extends Arma{ //Creamos una clase llamada Tipo, mediante la palabra reservada extends tenemos una herencia de la clase Arma
    
    velocidad:number =0;
    
    constructor(nombre_arma:string){ 
    super(nombre_arma)               //Por medio de esto estaremos utilizando el constructor de la clse Arma
    }
    
    Tipo_de_arma(){  //Agregamos un metodo dentro de nuestra clase con herencia el cual mostrara el tipo de arma
    console.log("Arma: " + this.nombre);
    }
    
    Velocidad_de_disparo(velocidad_disparo:number){
    
        this.velocidad =velocidad_disparo;
        console.log("Velocidad de disparo: " + this.velocidad);
    }
    }
    
    console.log("Atributos de Armas:");

    let atributos1 = new Tipo("M416"); //Creamos un objeto al cual le agregamos su nombre y atibuto
    atributos1.Tipo_de_arma();
    atributos1.dano_del_arma(41);
    atributos1.Velocidad_de_disparo(502);
    
    let atributos2 = new Tipo("Grosa"); //X2
    atributos2.Tipo_de_arma();
    atributos2.dano_del_arma(49);
    atributos2.Velocidad_de_disparo(613);
    
    let atributos3 = new Tipo("AWM"); //X3
    atributos3.Tipo_de_arma();
    atributos3.dano_del_arma(132);
    atributos3.Velocidad_de_disparo(65);