function saludar(){
    console.log("Hola como estas");
}

function evaluar(edad){
    if(edad >=18){
        console.log("Es mayor de edad");
    }else{
        console.log("Es menor de edad");
    }
}

function sumar(n1,n2){
    return n1+n2;
}

function calular_varios(ancho,alto,profundo){
    var area = ancho*alto;
    var volumen = ancho * alto * profundo;
    var valores = [area, volumen]
    return valores;
}
var r= calular_varios(3,4,5);
console.log("Valor de area es:" +r[0]+ " y El valor el volumen es:" + r[1]);

saludar();
evaluar(15);
evaluar(20);

var s = sumar(4,9);
console.log("La suma es:" +s);