
let d = 20;
let e = d ;
console.log( d , e );
d = 40; // Cambia el valor de d pero e todavia guarda en memoria el valor anterior de D que era 20.
console.log( d , e );

// En este ejemplo Alvaro y Camilo apuntan al mismo objeto , por lo cual si se modifica cualquiera de los 2 los cambios se vera reflejados en ambos.
let camilo = { nombre : 'Camilo' };
let alvaro = { ...camilo }; // Con el operador spread ahora si el nombre de Alvaro sera Alvaro y el nombre de Camilo sera Camilo
alvaro.nombre = 'Alvaro';     
console.log( { camilo, alvaro  });

// Otro ejemplo

const changeName = ({ ...person }) => {  
    person.name = 'Bruce';
    return person;
}

let falcon = { name: 'Falcon' }; // En estas lineas de codigo lo que se hace es crear 2 variables la una contiene un objeto con un nombre en este caso 'falcon' , a continuacion se crean una variable llamada bruce la cual contiene el llamado de la funcion creada arriba y por argumentos pasamos la varible que fue creada antes que en este caso es falcon con el nombre de falcon
let bruce = changeName( falcon );
console.log({ falcon, bruce });



// Ejercicio con arreglos 

const frutas = [ 'Manzana', 'Pera', 'Banano' ];
const masFrutas = [ ...frutas ];

masFrutas.push( 'Kiwi' );
console.table({ frutas, masFrutas });








// Ejemplos con el operador spread ( Mis ejemplos ).

let numbers = [ 11,23,35,47 ];   // 1. Pasando elementos individuales a argumentos en una funcion.
const sumaDeArray = ( n1 , n2 , n3 , n4 ) => n1 + n2 + n3 + n4;
console.log( sumaDeArray( ...numbers ) );


// 2. Copiar un arreglo de manera identica.

let juegos = [ 'Warzone', 'Rocket league', 'Gta v' ];
console.log( juegos );
let copiaDeJuegos = [ ... juegos ];
console.log( copiaDeJuegos );

// 3. Combinar varios arreglos en uno solo.

let numeros = [ 10 , 20 , 30  ];
let numeros2 = [ 40 , 50 , 60 ];

let agrupacionDeNumeros = [ ...numeros, ...numeros2 ];
console.log( agrupacionDeNumeros );

// Agregando nuevos elementos a un objeto con el operador spread.

let persona = {  
    nombre : 'Camilo',
    Apellido : 'Arturo',
}

let aniadiendoEdad = { ...persona, edad : 20 };
console.log( aniadiendoEdad );