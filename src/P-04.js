console.log("Arrow function con dos parámetros: ") 
// Arrow function con dos parámetros
const sum = (num1, num2) => {
    return num1 + num2;
  };
  // Llamar a la función sum() con números como argumentos
  const resultado = sum(5, 3);
  
  // Mostrar el resultado en la consola
  console.log(resultado);
  console.log(sum(6,7));

console.log(" Arrow function sin parámetros: ")  
// Arrow function sin parámetros
const greet = () => {
    return 'LABORATORIO 3 AUXILIATURA "Arrow function" ';
  };
  // Mostrar el resultado en la consola
   console.log(greet());


console.log("Arrow function con un parámetro:  ")  
// Arrow function con un parámetro
const square = (num) => {
    return num * num;
  };
  
  // Llamar a la función square() con un número como argumento
  const resul = square(3);
  
  // Mostrar el resultado en la consola
  console.log(resul);
  console.log(square(4));


console.log("Arrow function de una sola línea: ")  
// Arrow function de una sola línea
const double = (num) => num * 2;

// Llamar a la función double() con un número como argumento
const resul2 = double(5);

// Mostrar el resultado en la consola
console.log(resul2);
console.log(double(7));

console.log("Arrow function con múltiples parámetros: ")  
// Arrow function con múltiples parámetros
const rest = (a, b) => {
    return a - b;
  };
  
  // Llamar a la función rest() con dos números como argumentos
  const resul3 = rest(7, 5);
  
  // Mostrar el resultado en la consola
  console.log(resul3);
  console.log(rest(7, 8));


console.log("Utilizando arrow functions con métodos de array: ")  
// Utilizando arrow functions con métodos de array
const numbers = [1, 2, 3, 4, 5, 6];


// Utilizando map para calcular el cuadrado de cada número
const squaredNumbers = numbers.map(num => num * num);
console.log("Utilizando map: ", squaredNumbers);

// Utilizando filter para obtener los números pares
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Utilizando filter: ", evenNumbers); 


// Utilizando reduce para calcular la suma de los números
const sumOfNumbers = numbers.reduce((acu, num) => acu + num, 0);
console.log("Utilizando reduce: ", sumOfNumbers);