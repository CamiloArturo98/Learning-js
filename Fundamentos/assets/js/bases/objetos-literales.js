let personaje = { 
    name : 'Tony Stark', 
    codeName : 'Iron man', 
    vivo  : false ,
    age : 40, 
    coords : {
        lat : 34.034 , 
        long : -118.70
    } , 
    trajes : ['Mark 1' , 'Mark 5' , 'Hulkbuster'],
    direccion : {
        zip : '1080 ,90265',
        ubicacion : 'Malibu , California',
    },
   'ultima pelicula' : 'End game' ,
 };
console.log( personaje['age'] ); // Obtiene la edad de el personaje 
console.log( personaje.coords.lat); // Obtiene la latitud de el objeto

console.log( 'suit s number : ' + personaje.trajes.length ); // Obtiene el numero de trajes que tiene el personaje.
console.log( 'Último traje : ' + personaje.trajes[ personaje.trajes.length-1 ] ); // Obtiene el ultimo de traje de el personaje.


const z = 'vivo'; // Creacion de una constante llamada z la cual almacena una variable de el objeto llamado personaje la cual se llama 'vivo'
console.log( 'vivo ', personaje[ z ] ); // Accedemos al objeto llamado personaje y entre [] hacemos referencia a la variable 'z' la cual contiene la variable 'vivo' de el objeto.

console.log( 'Last movie : ' + personaje[ "ultima pelicula" ] );  // Para esta propiedad no podemos utilizar la notacion de punto.


// Mis ejercicios 
const x = 'codeName';
console.log( 'codeName : ' + personaje[ x ] );


// More details about literal objects 

delete personaje.edad;
console.log( personaje );

personaje.casado = true;

const pairs = Object.entries( personaje );
console.log( pairs );

Object.freeze( personaje ); // Congela nuestro objeto , lo que sucede es que no se puede ni crear ni eliminar propiedades luego de el metodo freeze. menos a los objetos que estan dentro de el objeto
personaje.dinero = 1000000000;
console.log( personaje );

personaje.direccion.ubicacion = 'Colombia';
console.log( personaje );

const properties = Object.getOwnPropertyNames( personaje );
console.log( properties );

const values = Object.values( personaje );
console.log( values );


console.log( personaje.trajes.length -1 );


const lastMovie = 'ultima pelicula';  //  Este es un ejemplo de otra forma con la cual nosotros podemos acceder a cualquier elemento de nuestro objeto.
console.log( personaje['ultima pelicula'] );


let nintendo = [ 
    ['A', 'Zelda'],
    [ 'B' , 'Mario bross' ]
];

const obj = Object.fromEntries( nintendo );
console.log( obj );