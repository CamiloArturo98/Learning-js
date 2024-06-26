const whatIsTheHigher = ( num1 , num2 ) => ( num1 > num2 ) ? num1 : num2;

const isMember = ( member ) =>  member === true ? `is memeber` : `Is not a memeber`;

console.log( isMember( false ) );
console.log(whatIsTheHigher(20 , 40));

const fried = false;
const friendsArr = [ 'Daniel', 'Nicolas', 'cayu', fried ? 'Thor' : 'Loki', ];

console.log( friendsArr );

const notes = 100; // A+ o lo que mierda es ? 
const grado = notes >= 95 ? 'A+' : 
              notes >= 90 ? 'A'  :
              notes >= 85 ? 'B+' :
              notes >= 80 ? 'B'  : 'F';

console.log( notes , grado );

// Mis ejemplos con el operador ternario 


// 1.  Determinar si un numero es negativo o es positivo.

const numeroEntero = -20;
const positivoONegativo = numeroEntero > 0 ? `${ numeroEntero } es positivo` : `${ numeroEntero } es negativo`;
console.log( positivoONegativo );


// 2. Determinar si un numero es par o impar.

const numero = 15; 
const paroOImpar = (numero % 2 == 0) ? `${ numero } es par ` : `${ numero } es impar`
console.log( paroOImpar );

// 3. Determinar si una persona tiene la edad requerida para votar.

const edad = 17; 
const puedeVotar = ( edad >= 18 ) ? `La persona cuenta con la mayoria de edad para votar ` : `La persona es menor de edad `
console.log( puedeVotar );

// 4. Determinar cual cadena contine una mayor longitud

 const string1 = 'your mom is men ';
 const string2 = 'Camilo';

 const cualTieneMayorLongitud = ( string1.length > string2.length ) ? `${ string1 } Contiene una mayor longitud ` : `${ string2 } contiene una mayour cantidad de caracteres`;
 console.log( cualTieneMayorLongitud );



// Mi ejemplo con operador ternario con multiples condiciones.
 const camiloNota = 59;
 const porcentajes = camiloNota >= 90 ? `Excelente` : 
                     camiloNota >= 80 ? `Bueno` : 
                     camiloNota >= 70 ? `Satisfactorio` : 
                     camiloNota >= 60 ? `Pasable` : `Insuficiente`;

                     console.log( porcentajes );



             