/**
 *
 *
    Crea un array vuoto e chiedi all'utente un numero da inserire nell'array.
    Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 200.
 *
 */

let arr=[];
let somma=0;
let num=0;
while(somma<200){
    num=parseFloat(prompt("inserisci un numer"));
    arr.push(num);
    somma+=num;
}console.log(arr);