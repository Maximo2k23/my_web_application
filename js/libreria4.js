
var valor = 10;

function valor_primero(numero){
    if (numero % 2 === 0 ){
        var par = valor*2;
        return par;
    }else{
        var impar = valor/2;
        return impar;
    }
}

function mayor(edad, sueldo){
    if (edad < 50){
        var sueldo_extra = sueldo * 110 / 100;
        var edad_aumentada = edad + 5;
        var nueva_edad_sueldo = [edad_aumentada, sueldo_extra];
        
    }else{
        var sueldo_extra = sueldo * 95/100;
        var edad_aumentada = edad + 10;
        var nueva_edad_sueldo = [edad_aumentada, sueldo_extra];
        
    }
    return nueva_edad_sueldo;
}
var nuevo = mayor(10,200);
console.log("El numero es: "+ valor_primero(10));
//console.log("La edad y sueldo es: " + nuevo[0]);
console.log("La edad nueva es: "+ mayor(35,200)[0] + " y el sueldo es: " +mayor(35,200)[1]);
