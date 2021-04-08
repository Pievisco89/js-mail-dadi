var mail_utente = prompt("Inserisci la tua mail");
var mail_accepted = [
  "pie-89@live.it",
  "pinco.pallino@gmail.com",
  "pino.deipini@gmail.com",
  "ugo.deughi@gmail.com",
  "carlo.decarli@gmail.com",
  "franco.defranchi@gmail.com",
  "marco.demarchi@gmail.com",
]

var msg;
var mail_presente = false;

for(var i=0; i<mail_accepted.length; i++){
  var mail = mail_accepted[i]
  if(mail === mail_utente){
    mail_presente = true
  }
}

if(mail_presente){
  msg = "E-mail accettata"
}else{
  msg = "E-mail rifiutata"
}

document.getElementById("output").innerHTML = msg;