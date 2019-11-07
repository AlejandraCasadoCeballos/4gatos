//Una funcion es un elemento de primer orden porque tiene propiedades especiales 
//  como que puedenutilizarse para llamar a otras funciones, pasarlas como parametro a otra funcion, etc

//TAD -> tipo compuesto de datos (que no es simple como un int o float). Suelen utiliarse clases para declararse.

//En vez de clses existen prototipos.
//Un prototipo es solamente un objeto.
//Al no haer clases para crear prototipos, existen jerarquias de objetos que pueden heredar de otros añadiendo elementos o atributos en tiempo de ejecucion.

var empleado = {
    nombre: "Pepe",
    salario: 1100,
    getName: function(){
        return this.nombre;
    }
}

empleado.direccionCasa = "Calle "; //Podemos añadir atributos a lls objetos siempre y cuando no sean tipos simples de datos

empleado.setSalario = function(num){
    if(this.salario < num){
        this.salario = num;
    }
    else{
        alert("No le bajes el sueldo a "+this.nombre);
    }
};

console.log(empleado.salario);

var variable0 = document.getElementById("id_");


var empleado0 = Object.create(empleado);
empleado0.apellido = "jcoweivnerpv";

//Si incluimos metodos y funciones en el objeto padre despues de crear los prototipos se pueden seguir utilizando.

var empleado1 = new empleado();










