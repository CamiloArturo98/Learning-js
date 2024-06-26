/*  - Dias de semana abrimos a las 11 
    - Pero los fines de semana abrimos hasta las 9
*/
// Entra a un sitio web, para consultar si esta abierto hoy

const actualDay = 2; // 0 : Domingo , 1: Lunes etc ...
const actualHour = 10;

let openHour;
let msm; // Esta abierto , Esta cerrado  hoy abrimos a las *****

// if( actualDay === 0 || actualDay === 6 ){  
// if( [0,6].includes( actualDay ) ) {   
// console.log( 'fin de semana ' );
//     openHour = 9;
// }else {  
//     console.log( 'Dia normal ' );
//     openHour = 11;
// }

openHour = ( [0,6].includes( actualDay ) ) ? 9 : 11; // Codigo simplificado con el operador ternario.

// if ( actualHour >= openHour ) {  
//     msm =  `Esta abierto`;
// } else {  
//     msm =  `Esta cerrado , hoy abrimos a las ${ openHour }`;
// }

msm = ( actualHour >= openHour ) ? msm = `Esta abierto` : msm = `Esta cerrado hoy abrimos a las ${ openHour }`; // Codigo resumido con el operador ternario.
console.log({ openHour, msm });

// Mis ejemplos utilizando el operador ternario :
// 1. Determinar si un numero es par o impar : 

const numero = 4;
let mensaje;

( numero % 2 === 0 ) ? mensaje = `El numero es par` : mensaje = `El numero es impar`;

console.log( mensaje );

// 2. Encontrar el mayor entre dos numeros : 

const num1  = 10;
const num2 = 20;
let mensajito;


let condicion = ( num1 < num2 ) ? mensajito = `El numero ${num2} es mayor que el numero ${num1}` : mensajito = `otra cosa`;
console.log( condicion );

// Verificar si una cadenas esta vacia 

let cadena = "Hola soy una cadena";
let estaVacia;

let laCadena = ( cadena === "" ) ? estaVacia = `La cadena esta vacia ` : estaVacia = `La cadena no esta vacia`;
console.log( laCadena );

// Mas ejercicios con el operador ternario.

let number = 10;
let resultado ;

resultado = ( number > 10 ) ? true : false;
console.log( resultado );


// 2. 

const parOImpar = ( number ) => {  
let resul;
 resul = (number % 2 === 0  )  ? 'par' : 'impar'; 
  
    return resul;

}

console.log( parOImpar(15) );

// 3. 

let a = 5;
let b = 10;
let mayor;
let resul;

resul = ( a > b ) ? mayor = a : mayor = b;

console.log( resul );



