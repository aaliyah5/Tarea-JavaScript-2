/*Primero los arreglos*/
const numeros = [10, 20, 30, 40, 50];
const nombres = ["Carlos", "Sofía", "Miguel", "María"];
const edades = [18, 32, 45, 27, 38];
const booleanos = [true, true, false, true];


const suma = numeros.reduce((acc, num) => acc + num, 0);
console.log(suma); // Resultado: 150

const mayoresQueTreinta = numeros.filter(num => num > 30);
console.log(mayoresQueTreinta); // Resultado: [40, 50]

const triplicados = numeros.map(num => num * 3);
console.log(triplicados); // Resultado: [30, 60, 90, 120, 150]

numeros.forEach(num => console.log(num)); // Imprime: 10 20 30 40 50

/////

const nombresConcatenados = nombres.reduce((acc, nombre) => acc + " " + nombre);
console.log(nombresConcatenados); // Resultado: "Carlos Sofía Miguel María"

const nombresConM = nombres.filter(nombre => nombre.includes('M'));
console.log(nombresConM); // Resultado: ["Miguel", "María"]

const nombresMinusculas = nombres.map(nombre => nombre.toLowerCase());
console.log(nombresMinusculas); // Resultado: ["carlos", "sofia", "miguel", "maría"]

nombres.forEach(nombre => console.log(nombre)); // Imprime: Carlos Sofía Miguel María

/////

const sumaEdades = edades.reduce((acc, edad) => acc + edad, 0);
console.log(sumaEdades); // Resultado: 160

const mayoresDeTreinta = edades.filter(edad => edad >= 30);
console.log(mayoresDeTreinta); // Resultado: [32, 45, 38]

const edadesIncrementadas = edades.map(edad => edad + 5);
console.log(edadesIncrementadas); // Resultado: [23, 37, 50, 32, 43]

edades.forEach(edad => console.log(edad)); // Imprime: 18 32 45 27 38

/////

const todosVerdaderos = booleanos.reduce((acc, bool) => acc && bool);
console.log(todosVerdaderos); // Resultado: false

const soloVerdaderos = booleanos.filter(bool => bool);
console.log(soloVerdaderos); // Resultado: [true, true, true]

const negados = booleanos.map(bool => !bool);
console.log(negados); // Resultado: [false, false, true, false]

booleanos.forEach(bool => console.log(bool)); // Imprime: true true false true



/*Funcion sin parametro*/
const mostrarHora = () => {
    const fecha = new Date();
    console.log(`La hora actual es: ${fecha.getHours()}:${fecha.getMinutes()}`);};
  mostrarHora(); // Ejemplo de salida: "La hora actual es: 10:30"  

 /*con 1*/
 const triple = numero => {
    console.log(`El triple de ${numero} es: ${numero * 3}`);
  };
  triple(4); // Resultado: "El triple de 4 es: 12"
  

/*2*/
const concatenarPalabras = (palabra1, palabra2) => {
    console.log(`${palabra1} ${palabra2}`);
  };
  concatenarPalabras("Hola", "Mundo"); // Resultado: "Hola Mundo"
  

/*3*/
const mayorDeTres = (num1, num2, num3) => {
    const mayor = Math.max(num1, num2, num3);
    console.log(`El número mayor entre ${num1}, ${num2} y ${num3} es: ${mayor}`);};
  mayorDeTres(10, 25, 7); // Resultado: "El número mayor entre 10, 25 y 7 es: 25"
  

/*mas*/
const obtenerLibro = () => {
    const libro = { titulo: "El Quijote", autor: "Miguel de Cervantes", año: 1605 };
    console.log(libro);
  };
  obtenerLibro(); // Resultado: { titulo: "El Quijote", autor: "Miguel de Cervantes", año: 1605 }
  