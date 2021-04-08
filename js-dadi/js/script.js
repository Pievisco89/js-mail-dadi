/* generare numero random da 1 a 6 utente e pc */
var num_utente = Math.floor(Math.random() * 6) + 1;
console.log(num_utente)
var num_computer = Math.floor(Math.random() * 6) + 1;
console.log(num_computer)

/* punteggio più alto vince */
var msg;

if(num_utente > num_computer){
  msg = "Congratulazioni! Hai vinto!"
}else if(num_utente === num_computer){
  msg = "Pareggio!"
}else{
  msg = "Peccato, hai perso! Ha vinto il computer!"
}

document.getElementById('output').innerHTML = msg;
document.getElementById('punteggio_utente').innerHTML = "Numero Utente:<br> " + num_utente;
document.getElementById('punteggio_computer').innerHTML = "Numero Computer:<br> " + num_computer;