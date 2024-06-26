const villanos = [ 'Joker', 'Loki', 'Thanos','Venom' ];

console.warn( 'For tradicional' );

for ( let i = 0 ; i < villanos.length ; i++ ) {  // Sintax tradicional de el ciclo for.
    console.log( villanos[i] );
}


console.warn( 'For in' );

for ( let i in villanos ){ 
    console.log( villanos[i] );
 }


 console.warn( 'For of' );

 for ( let villano of villanos ) {  
    console.log( villano );
 }


 // Mis ejercicios con for of

//  console.warn( 'Mas ejercicios con el ciclo for of' );

//  let numeros = [ 20 , 60 , 30 ,10 ,50 ];

//  for( let numero of numeros ) {  
//     console.log( numero );
//  }
 

 // 2. Sumar elementos de un array.

let sumaDeNumeros = [ 12 , 10 , 7 , 24 ];
let suma = 0;

for( let sumaNumeros of sumaDeNumeros ) {  
    suma += sumaNumeros;
}

console.log( suma );

// 3. Resta de todos los elementos de un arr. 

let restaDeNumeros = [ 12 , 405 , 708 , 908 ];
let resta = 0;

for ( let rest of restaDeNumeros ) {

    resta -= rest;
}

console.log( resta );

// 4. multiplicacion de todos los elemtos de un array.

let multiplicacionDeNumeros = [ 800 , 800 , 100, 200 ];
let mult = 1;

for( let multiplica of multiplicacionDeNumeros ) {  
    mult *= multiplica;
}

console.log( mult );

// 5. Division de todos los elementos de un array. 

let divisionDeNumeros = [ 2 , 2 ];
let divisiones = 1;

for ( let division of divisionDeNumeros ) {  
    divisiones %= division;
}

console.log( divisiones );

// 6. Ordenar los numeros de un arreglo de menor a mayor:o .

const ordenarNumeros = [ 3, 2 , 1 ];
for( nume of ordenarNumeros ) { 
    
}
