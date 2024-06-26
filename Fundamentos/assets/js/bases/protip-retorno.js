// function person ( name , surname ){
//     return { name, surname }
// }


// const createPerson = person( 'Camilo', 'Arturo' );
// console.log( createPerson );


const person =  ( name , surname ) => ({ name, surname }) ;

console.log( person( 'Camilo', 'Arturo' ) );


// function imprimeArgumentos(){
//     console.log( arguments );
// }

// imprimeArgumentos( 10 , true , 'Camm', 'something' , false ); 


const imprimeArgumentos = ( Age, ...arguments ) => {
    // console.log( arguments );
    return arguments;
}

let [ Viga , casado , Nombre , Ciudad  ] = imprimeArgumentos( 10 , true , false , 'Camilo' , 'Colombia' ); // Se aniade claves a los valores que tiene la funcion imprimeArgunmentos.
console.log( { Viga , casado , Nombre , Ciudad } ); // Se imprime las claves asignadas a cada uno de los valores.



// Mi ejemplo.
const mySelf = ( ...args ) => { 
    return args;
}

let [ name , age , surname , married , isStronges , country ] =  mySelf( 'Camilo', 20 , 'Arturo', false , true  , 'Colombia' ); 
console.log( { name , age , surname , married , isStronges , country } );




// Desestructuracion de argumentos.



let tony = { 
    name : 'Tony Stark', 
    codeName : 'Iron man', 
    vivo  : false ,
    age : 40, 
    trajes : ['Mark 1' , 'Mark 5' , 'Hulkbuster'],
 };


 const properties = ( { name, codeName, vivo, age = 20 , trajes } ) => {   // Ojo , no es buena practica colocar una funcion debajo de condigo , en este caso se hizo para fines educativos.
    console.log( { name } );
    console.log( { codeName } );
    console.log( { vivo } );
    console.log( { age } );
    console.log( { trajes } );
 }

 properties( tony );



 // Mis ejemplos sobre desestructuracion de arreglos 

 let capitanAmerica = {
    name : 'Steve rogers' ,
    nickName : 'El cap' , 
    vivo : true , 
    age  : 40 , 
    estadoCivil : 'Viudo'
 }


 const otherPerson = ( { name, nickName , vivo , age , estadoCivil } ) => {
    console.log( { name } );
    console.log( { nickName } );
    console.log( { vivo } );
    console.log( { age } );
    console.log( { estadoCivil } );
 }


 otherPerson( capitanAmerica );


const yo = ( nm , ap ) => ({ nm ,ap });

const { ap : surName } = yo( 'Camilo', 'Arturo' );
console.log({ surName });



// Desestructuracion de arreglos ejemplo completo hecho por mi : 

const hulk = {  
   name : 'Bruce Banner' , 
   nickName : 'Hulk' , 
   vivo : true , 
   lastMovie : 'She hulk',
}

const printProperties = ({ name, nickName, vivo, lastMovie }) => {  
   console.log({ name });
   console.log({ nickName });
   console.log({ vivo });
   console.log({ lastMovie });

}

printProperties( hulk );