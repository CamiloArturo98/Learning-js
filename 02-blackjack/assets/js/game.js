let deck = []; // Es una variable global.
const types = ['C', 'D', 'H', 'S'];
const especialLetters = ['A', 'J', 'Q', 'K'];

let points;
let gamerPoints = 0;
let pcPoints = 0;

// Referencias al html botones

const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');


//Referencia a los small
let small = document.querySelector('#change');
let smallPc = document.querySelector('#change2');

// Referencia a las cartas
const gamerLettersDiv = document.querySelector('#gamer-letters');
const pcLettersDiv = document.querySelector('#pcLetters');





// Esta funcion crea una nueva baraja
const createDeck = () => {
    for (let i = 2; i <= 10; i++) {
        for (let type of types) {
            deck.push(i + type);
        }
    }

    for (let type of types) {
        for (let especial of especialLetters) {
            deck.push(especial + type);
        }
    }


    deck = _.shuffle(deck);
    console.log(deck);
}

createDeck();

//Esta funcion me permite tomar una carta del deck

const askForLetter = () => {

    const letter = deck.pop();


    if (deck.length === 0) {
        throw 'No hay mas cartas en el deck';
    }

    // console.log( letter );
    // console.log( deck ); // Este deck debe ser el que tiene la carta menos
    return letter;
}

// askForLetter();

const letterValue = (letter) => {

    const value = letter.substring(0, letter.length - 1);

    return (isNaN(value)) ?
        (value === 'A') ? 11 : 10 : value * 1;
}


// Turno de la pc 

const pcShift = (minPoints) => {

    do {

        const letter = askForLetter();

        pcPoints = pcPoints + letterValue(letter);

        smallPc.innerHTML = `<small>${pcPoints}</small>`;

        const imgLetter = document.createElement('img');
        imgLetter.src = `assets/cartas/${letter}.png`;
        imgLetter.classList.add('letter');
        pcLettersDiv.append(imgLetter);


        if (minPoints > 21) {
            break;
        }


    } while ((pcPoints < minPoints) && (minPoints <= 21));

    setTimeout(() => {

        if (pcPoints === minPoints) {
            alert('Nothing win');
        } else if (minPoints > 21) {
            alert('pc win');
        } else if ( pcPoints > 21) {
            alert('You win 👍');
        }

    }, 10);


}





// Evento escoger una carta.

let evento = btn2.addEventListener('click', () => {


    const letter = askForLetter();

    gamerPoints = gamerPoints + letterValue(letter);

    small.innerHTML = `<small>${gamerPoints}</small>`;

    const imgLetter = document.createElement('img');
    imgLetter.src = `assets/cartas/${letter}.png`;
    imgLetter.classList.add('letter');
    gamerLettersDiv.append(imgLetter);


    if (gamerPoints > 21) {
        console.warn('You loose');
        btn2.disabled = true;
        btn3.disabled = true;
        pcShift(gamerPoints);
    } else if (gamerPoints === 21) {
        console.warn('You win')
        btn2.disabled = true;
        btn3.disabled = true;
        pcShift(gamerPoints);
    }


});



// Evento detener

let stopEvent = btn3.addEventListener('click', () => {

    btn2.disabled = true;
    btn3.disabled = true;

    pcShift(gamerPoints);

});


// Evento nuevo juego.

btn1.addEventListener('click', () => {

    deck = [];

    if (deck.length === 0) {
        createDeck();
    }
    // Removiendo las cartas a el jugador
    let removeLetter = document.getElementById('gamer-letters');
    removeLetter.innerHTML = '<img></img>';

    // Removiendo las cartas a el pc 
    let removeLetterPc = document.getElementById('pcLetters');
    removeLetterPc.innerHTML = '<img></img>';

    // Puntajes en 0 de el jugador
    let removePointsGamer = document.getElementById('change');
    removePointsGamer.innerText = '0';

    // Puntajes en 0 de la pc

    let removePointspc = document.getElementById('change2');
    removePointspc.innerText = '0';

    // Habilitando botones
    btn2.disabled = false;
    btn3.disabled = false;


    //Resetear los puntajes.
    
    gamerPoints = 0;
    pcPoints = 0;

});





















