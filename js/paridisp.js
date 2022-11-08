const sceltaUser = prompt("scrivi cosa scegli:pari o dispari?");

let numUser = prompt("ora dammi un numero da 1 a 5");

let numComputer = randomGen();



let result = sommaConfronto();

console.log(result);

if (result === sceltaUser){
    alert("complimenti hai vinto a pari e dispari!");
} else{
    alert("Mi dispiace, hai perso");
}


function randomGen (){
    return Math.floor(Math.random() * 5) + 1;
}


function sommaConfronto (){
    numUser = parseInt(numUser, 10);
    let somma = numComputer + numUser;
    somma = parseInt(somma, 10);
    let risultato;
    if (somma % 2 === 0){
        risultato = "pari";
    } else {
        risultato = "dispari";
    }
    return risultato;
}