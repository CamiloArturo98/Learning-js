const returnnTrue = () => {  
    console.log( 'Regresa true' );
    return true;
}


 const returnnFalse = () => {  
    
    console.log( 'Regresa false' );
     return false;

 }

 console.warn( 'Not o la negacion' );

 console.log( true );
 console.log( !true ); // false

 console.log( !returnnTrue() );

 console.log( !false ); // true


 console.warn( 'And' ); // Resulta true si todos los valores son verdaderos 
 console.log( true && true ); // Regresa true
 console.log( true && !false ); // Regresa un false


 console.log( !returnnFalse() );

 console.log( '========&&==========' );

console.log( '4 condiciones', true && true && true && false ); // Return false.

 console.log( returnnFalse() && returnnTrue() );   // False
 console.log( returnnTrue() && returnnFalse() );   // False


 console.warn( 'OR' ); // Para que regrese true solo una condicion tiene que ser verdadera.
console.log( true || false )// Return true.
console.log( false || false )// Return false



console.log( returnnTrue() || returnnFalse() )// Return true y no ejecuta el returnFalse, no hace falta evaluar el sigueiente valor por que ya es verdadero.
console.log( '4 condiciones', true || true || true || false ); // Return true


console.warn( 'Asignaciones' );

const imUndefined = undefined;
const imNull = null;
const imFalse = false;

const some = true && 'Hello word'; // Evalua los valores, en este caso como el primer valor es verdadero evalua y pasa por consola el segundo valor, en el caso de que fuera falso no tendria en cuenta el valor de 'Hola mundo'.
const someOne = 'Hola' && 'mundo'; // En este ejemplo solo evalua el segundo valor 
const idk = imFalse || 'Im not false';
const otherThing = imFalse || imNull || imUndefined || 'Im not false' || true;
const otherThing2 = imFalse || returnnTrue() || imUndefined || 'Im not false' || true;

console.log({ idk, otherThing, otherThing2 });


