
function saludame ( nombre){
    // console.log( arguments );
    // console.log( 'Hello ' + nombre );
    return 'Hello ' + nombre ; 
} 


// const saludar2 = function() {  // funcion anonima.
//     console.log( 'Hello word' );
// }

// const flechita = ( nombre ) => {
//     console.log( 'Hello ' + nombre );
// }

// flechita( 'Arrow' );
const retornSal = saludame( 'Camilo ' , 20 , false , ' Colombia' );
console.log( {retornSal} );



// Ejemplos hechos por mi :)))

const hello = ( nombre )=>{
    return 'Hello ' + nombre;
}

console.log( hello( 'Camilo' ) );

const suma = ( num1 , num2  ) => num1 + num2;

console.log( suma( 20 , 60 ) );


// function random(){
//     return Math.random();
// }

// console.log( random() ); 

const random = () => Math.random();  // Funcion de flecha sin llaves y en una sola linea de codigo 

console.log( random() );

// Funcion anonima.
const youreAge = function ( edad ){
        console.log( 'Youre age is  : ' + edad );
}

console.log( youreAge( 20 ) );
