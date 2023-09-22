"use strict";
//commentaire oui oui (sur une ligne)
/* commentaire
oui oui 
(sur plusieurs lignes)
*/
let prenom //création d'une variable passe par un mot clef: "var"
prenom="Alfred"; 
console.log(prenom);
prenom="Alexandre";
console.log(prenom); //permet d'afficher dans la console du site (f12 chrome)

let nom="Marier";
console.log(nom); //je suis une chaine de caractere (string) 
console.log(typeof nom); //"typeof permet d'afficher la catégorie (soit string soit number)"

//"let" autre mot clef qui remplace "var" ("let" est plus à jour que "var")

let dateNaissance=2003; //pas de guillemets pour les valeurs en chiffre
console.log(dateNaissance);
let dateActuelle=2023; //je suis un nombre (number)
console.log(dateActuelle);
let age=dateActuelle-dateNaissance;
console.log(age);
//concatenation permet d'associer, assembler plusieurs variables ensemble

console.log(nom +" "+ prenom); //pour afficher le blase complet avec un espace, penser à additioner un espace entre guillemets pour de vrai (+" "+)
console.log("Je suis "+nom +" "+prenom +", mon age : "+age+" ans");

//boolean :autre type de variable, variable à deux valeurs seulement : vrai ou faux (true or fasle)
let ouvert=true;
let fermé=false;

let total= 15.3; //type number
let totalBis="15.3";

const pseudo="alex92"; //"const" mot clef pour créer une variable ne pouvant pas etre modifié
console.log (pseudo);
pseudo="alfred92";
console.log (pseudo);   