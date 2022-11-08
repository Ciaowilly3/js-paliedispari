const input = prompt("inserisci la parola della quale vuoi controllare la palindromia");
let array = input.split('');
let j = array.length - 1;


const result = checker(array, j);
console.log(`risultato ${result}`);
if(result !== 0){
    alert("la parola non è palindroma")
}else{
    alert("la parola è palindroma")

}

function checker (array, j){
    let risultato = 0;
    
    for (let i=0; i<array.length; i++){
            if (array[i] != array[j]){
                risultato = risultato + 1;
            }
            j--;
    }
    return risultato;
}