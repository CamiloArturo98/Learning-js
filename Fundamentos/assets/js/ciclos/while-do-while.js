

console.warn( 'Ciclo while' );


const cars = [ 'Mustang', 'Lambo', 'Ferrari', 'Buggati' ];

let i = 0;

while( i < cars.length ) { // Esta condicion tiene que ser verdadera
    if ( i === 1 ){  
        //break;
        i++; // si antes no se incrementa el valor de i en este caso entraremos en un bucle infinito.
        continue;
    }

    console.log( cars[ i ] );
    i ++;
}


console.warn( 'Ciclo do while' );

let z = 3;

do {  
    
    console.log( cars[ z ] );
    z ++;

} while( z < cars.length );
