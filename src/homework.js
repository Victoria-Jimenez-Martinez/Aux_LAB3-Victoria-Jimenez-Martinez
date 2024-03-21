(() => {

  /* Excercises */

  /* First excercise */
  
  let numbers = [1, 2, 3, 4, 5];
  
  /* Multiplique los numeros del arreglo por 5 */
  let multipliedNumbers = numbers.map(number => number * 5);

  /*Resultado esperado: [5, 10, 15, 20, 25] */
  console.log("Resultado del primer ejercicio: ", multipliedNumbers);

  /* First excercise */

  /* Second excercise */

  let names = ["Jhosep", "Daniel", "Rodrigo", "Veronica"];

  /* Ordernar los nombres alfabeticamente */
  let sortedNames = names.sort();

  /* Resultado esperado: ["Daniel", "Jhosep", "Rodrigo", "Veronica"] */
  console.log("Resultado del segundo ejercicio: ", sortedNames);

  /* Second excercise */

  /* Thrid excercise */

  const data = ['a', 'b', 'z', 'r', 'a', 'c', 'r', 'a'];

  /* Dado un arreglo, crear otro sin letras repetidas */
  let uniqueLetters  = [...new Set(data)];
  /* Resultado esperado: ['a', 'b', 'z', 'r', 'c'] */
  console.log("Resultado del tercer ejercicio: ", uniqueLetters);
  /* Thrid excercise */

  /* Fourth excercise */

  const largeWord = "abcdabcdABCD";

  /* Dado un string mostrar cuantas veces se repite cada letra*/
  let letterCount = {};

  for (let i of largeWord){
   if (i in letterCount){
    letterCount[i]++;
   }else {
    letterCount[i]= 1;
   }

  }
  /* Resultado: 
    {
      a: 2,
      b: 2,
      c: 2,
      d: 2,
      A: 1,
      B: 1,
      C: 1,
      D: 1
    }
  */

  /* Fourth excercise */
console.log("Resultado del cuarto ejercicio: ", letterCount);
})();
