class Persona{
    constructor(dni,nombres, apellidos, edad){
        this.dni = dni;
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.edad = edad;
    }

    get presentar(){
        return "Hola soy " + this.nombres;
    }

    get evaluar(){
        if(this.edad >= 18){
            return "Hola soy " + this.nombres+" y soy el mayor";
        }else{
            return "Hola soy " + this.nombres+" y soy el menor";
        }
    }
}

const persona1 = new Persona("123","Juan","Perez",25);
console.log(persona1.presentar);
console.log(persona1.evaluar);

const persona2 = new Persona("345","Maria","Avalos",13);
console.log(persona2.presentar);
console.log(persona2.evaluar);

/*class Animal{
    constructor(raza, nombre){
        this.raza = raza;
        this.nombre = nombre;
    }

    //getter

    get razaMostrar(){
        return this.raza;
    }

    get presentar(){
        return "Hola soy: "+ this.nombre
    }

}

const animal1 = new Animal("raza1", "el lechero");
console.log(animal1.razaMostrar);
console.log(animal1.presentar);*/

