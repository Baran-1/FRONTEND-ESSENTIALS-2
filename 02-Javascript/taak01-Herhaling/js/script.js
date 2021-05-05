

let naam = prompt("Wat is je naam?");
let result = confirm("klopt deze naam " + naam + "?");

if(result == true){
  alert("je naam is " + naam + ":D" )
}
else{
  prompt("probeer het nog een keer");
}

