/*In un array sono contenuti i nomi degli invitati alla festa del grande Gatespy,
Chiedi all'utente il suo nome e comunicagli se può participare o no alla festa. */


let guests=['Claudio','fabio','alessandro','danilo','paolo','manule'];


let name =prompt("Inserisci il\' nome").toLowerCase().trim();
let isGuest= false;
for(let i=0;i<guests.length;i++){
    if(name==guests[i].toLocaleLowerCase()){
        isGuest=true;
    }
}
if(isGuest)
    console.log('il nome inserito è tra gli invitati');
else
console.log('il nome inserito non è tra gli invitati');


