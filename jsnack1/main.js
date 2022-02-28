/*IL software deve chiedere per 10 volte all'utente di inserire Un numero
IL progamma stampa La somma di tutti L numeri inseriti.*/


let sum=0;
for(let i=0;i<10;i++){
    let num=parseInt(prompt("inserisci un numero"));
    sum+=num;
}
console.log(sum);