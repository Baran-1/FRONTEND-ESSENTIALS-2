topFilms = [
    "The Godfather",
    "The Shawshank Redemption",
    "Schindler's List",
    "Raging Bull",
    "Casablanca",
    "Citizen Kane",
    "Gone with the Wind",
    "The Wizard of Oz",
    "One Flew Over the Cuckoo's Nest",
    "Lawrence of Arabia"
];

eigenTopFilms = [];

//met deze for-loop word de ordered list gevuld met film namen
for(i = 0; i < topFilms.length; i++){
    document.querySelector(".imdb-film" + (i+1)).innerHTML = topFilms[i];
}

let huidigePositie = 1;
function kiesFilm(antwoord){
    antwoord = prompt(`Kies een Film voor plek ${huidigePositie}`);
    
    let film = topFilms[antwoord - 1]

    document.querySelector(`.eigen-film${huidigePositie}`).innerHTML = film;

    document.querySelector(`.imdb-film${antwoord}`).style.textDecoration = "line-through";
    
    huidigePositie++; 

  if(huidigePositie===4) {
    document.querySelector(".kiesfilm-button").textContent = "Klaar!";
} else {
    document.querySelector(".huidige-positie").textContent = huidigePositie;
}
}


//function geefKleur(colorName){
    //colorName = ".film" + antwoord + "-naam";
   // document.querySelector(colorName).style.backgroundColor = "blue";

//}