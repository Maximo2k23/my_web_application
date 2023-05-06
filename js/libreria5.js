/*horaA = new Date();
horaB = new Date("04-23-23");

console.log(Math.round(diferencia/ (1000*60*60*24)));

console.log(horaA.getDate()+"/"+(horaA.getMonth()+1) +"/"+ horaA.getFullYear());
console.log(horaB.getDate()+"/"+(horaB.getMonth()+1) +"/"+ horaB.getFullYear());*/

var persona = {
    dni: '12345678',
    nombre: 'Henry',
    apellido: 'Perez',
    edad: 20,
    presentarse: function(){
        return "Hola soy " + this.nombre
    }
}

var nombre = persona.edad;

console.log(nombre);
console.log(persona.presentarse());