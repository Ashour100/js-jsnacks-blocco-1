/*  
    Crea un array vuoto
    Chiedi per 10 volte all'utente di inserire un numero,
    se è dispari inseriscilo nell'array

*/
let numbers=[];


for(let i=0;i<10;i++){
    let num=parseInt(prompt('inserisci un numero'));
    if (num%2!=0 &&!isNaN(num))
        numbers.push(num);
} 
console.log(numbers);

