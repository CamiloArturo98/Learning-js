let c = 10;

if ( c < 10 ) {  // undefined , null , una asignacion.
    console.log( 'C es mayor o igual  que 10' );
} else {  

    console.log( 'C es menor que 10' )

}

// console.log( 'Fin de el programa' );


const hoy = new Date();

let day = hoy.getDate(); // 0 es Domingo 1 Lunes etc
console.log({ day });

if ( day === 0  ){
    console.log( 'is sunday' );
}else if ( day === 1 ){  
   console.log( 'Is Monday dued' );
}else {  
    console.log( 'is not Sunday or Monday ' );
}




day = 1;

let diasDeLasemana = [ 'Domingo', 'Lunes', 'Martes', 'Mircoles','Jueves', 'Viernes', 'Sabado',  ];
console.log( diasDeLasemana[ day ] );
