/**
 * 1- faire une boucle de boucle moi
 * 
 * 2 - tableau 
 * 
 * 3 - récuperer le nom du user et l'afficher a coté de bonjours
 * 
 */

// --------------------------------------------------------------
// ------------------------ Tableau -----------------------------
// --------------------------------------------------------------


// ? Tableau multidimentionnel simple

tab = [
    [
        "nom",
        "prenom"

    ], 
    [
        "nom2",
        "prenom2",
        [
           "nom4",
           "nom5" 
        ]
    ]
];

// recuperation de "nom4"
let DeuxiemeNom = tab[1][2][0];

console.log(DeuxiemeNom);


// ? tableau multidimentionnel associatif 

tabAssociatif = {
    premierTableau: {
        nom1: "erwann",
        prenom1: "robert",
    },
    deuxiemeTableau: {
        nom2: "roger",
        prenom2: "emilien",
        table: [
            "nom8",
            "nom9"
        ]
    }
}

let test2 = tabAssociatif.deuxiemeTableau.table[0];

console.log(test2);

// -----------------------------------------------------------------
// -------------------- Fonctions ----------------------------------
// -----------------------------------------------------------------

// ? Création d'une fonction de comparaison de deux nombres

function maFunction(param1, param2) {
    if (param1 === param2) {
        return true;
    } else {
        return false;
    }
}

// ? Utilisation de la fonction
let variable = maFunction(1, 2);

// ? Test si variable est vrai 
if (variable) {
    console.log('c\'est egal');
} else {
    console.log('ce n\'est pas egal');
}

// -------------------------------------------------------------
// ---------------------- manipulation du DOM ------------------
// -------------------------------------------------------------

// body :nth-child() <= cible l'element enfant 1 de body

// ? on recupere la balise a 
const lien = document.querySelector('a');

// ? on lui ajoute un attribut href
lien.setAttribute("href", "https://developer.mozilla.org/fr/docs/Web/CSS/:nth-child");

// ? un autre attribut target
lien.setAttribute("target", "blank");

// ? on récupere le contenu de l'attibut href défini plus haut
let monAttribut =  lien.getAttribute("href");

// ? on stock un link
const link = "https://developer.mozilla.org/fr/docs/Web/CSS/:nth-child";

// ? on test si l'attribut "monAttribut" est egale a la variable "link"
if (monAttribut === link) {
    // ? si oui on redefini le contenu de l'attribut "href"
    lien.setAttribute("href", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in");
}

lien.classList.add("maclass");

// ? on récupere le contenu de l'attibut href redéfini plus haut
let monAttribut2 =  lien.getAttribute("href");

console.log(lien);
console.log(monAttribut);
console.log(monAttribut2);

// -----------------------------------------------------------------
// ------------------- Boucles -------------------------------------
// -----------------------------------------------------------------

const boucle = document.querySelector("body :nth-child(3)");

// ! il faut absolument déclaré une variable d'indentation en dehors de la boucle while !
let compteurTourDeBoucles = 0; // ? <= ici

let nombreTourDeBouclesVoulu = 10; // ? 

while (compteurTourDeBoucles !== nombreTourDeBouclesVoulu) {

    let container = document.querySelector(".boucle");
    // let paragraphe = document.createElement('p');
    let ajoutTexte = paragraphe.innerHTML = "<p>Boucle moi !</p>";

    

    compteurTourDeBoucles ++;
}
