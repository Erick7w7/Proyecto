let articulo:string = "Television";

function mostrar_producto():string{
return articulo;
}


let descuento = function():boolean{
return false;
}

console.log(mostrar_producto());
console.log(descuento());


//Funciones con parametros obligatorios

function DetalleProducto(modelo:string, tamano:number):string{
return modelo + " " + tamano + " Pulgadas.";
}

let detalle = DetalleProducto("SmartTV", 70);
console.log(detalle);


//Parametros opcionales

function Envios(direccion:string, costo?:number):string{
    if(costo){
        return direccion + " Costo: " + costo + " pesos.";
    }
    else{
        return direccion;
    }
}

let envio = Envios("Lo de jesus 34", 110);
console.log(envio);