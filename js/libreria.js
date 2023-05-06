var matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

var suma = 0;
/*for(var fila=0; fila<matriz.length; fila++){
    for(var col=0; col<matriz.length; col++){
        suma += matriz[fila][col];
    }
}
alert("La suma es: " +suma);*/

for(var fila=0; fila<matriz.length; fila++){
    alert("El numero es " + matriz[fila][fila])
    suma += matriz[fila][fila];
}

console.log("La suma es " + suma);