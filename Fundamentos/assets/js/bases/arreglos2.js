let games = [ 'Warzone', 'Gta v', 'Rocket league' ];
//  console.log('Large : ' + games.length);

let primero = games[ 5-5 ]; // Resultado de la resta es cero , por lo cual el elemento que retornara es el primer elemento de el array.
let ultimo = games [ games.length - 1 ]; // Obtiene la longitud de el arreglo y luego le resta 1 

// console.log( {primero, ultimo} );

 
games.forEach( (elemento, indice,arr) => {
    console.log( {elemento, indice , arr} );
})

let newLenght = games.push( 'MW3' );
// console.log( {newLenght,games} ) ;


newLenght = games.unshift( 'Mario kart' );
// console.log( {newLenght,games} );

let deleteGame = games.pop();
// console.log( {deleteGame, games} );


let pos = 1;

// console.log( games );

let gamesDeleted = games.splice( pos, 1 );
// console.log( {gamesDeleted, games} );

let gtaIndex = games.indexOf( 'Gta v' );
// console.log( {gtaIndex} );


// Mis ejemplos aparte

let animals = [ 'Dog', 'Cat' ];
let animals2 = [ 'Snake' , 'Lion' ];

Array.prototype.push.apply( animals, animals2 );
// console.log( animals );


let numbers = [ 1, 2 , 3, 4 ];

numbers.forEach( (elemento , indic , arr)=>{
    console.log( {elemento , indic, arr} );
} )



let months = [ 'Enero', 'Febrero', 'Marzo', 'Mayo' ];
months.splice( 1, 1 );
console.log( months );