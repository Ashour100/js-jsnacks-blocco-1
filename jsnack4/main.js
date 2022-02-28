/*  
    Chiedi un numero di 7 cifre dall'utente
    e calcola la somma di tutte le cifre che compongono il numero
*/

let num= prompt("Dammi un numero"); 
let sum=0;
for(let i=0;i<num.length;i++){
    sum+=parseInt(num.charAt(i));
}
console.log(sum);



