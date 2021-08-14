/**
 * 1- faire une boucle de boucle moi
 * 
 * 2 - tableau 
 * 
 * 3 - récuperer le nom du user et l'afficher a coté de bonjours
 * 
 */

// ------------------------ Tableau -----------------------------

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

let DeuxiemeNom = tab[1][2][0];

console.log(DeuxiemeNom);

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

// -------------------- Fonctions ----------------------------------

function maFunction(param1, param2) {
    if (param1 === param2) {
        return true;
    } else {
        return false;
    }
}

let variable = maFunction(1, 2);

if (variable) {
    console.log('c\'est egal');
} else {
    console.log('ce n\'est pas egal');
}

// ---------------------- recuperation / affichage de données ----------

// body :nth-child() <= cible l'element enfant 1 de body

// const boucle = document.querySelector("body :nth-child(3)");

// boucle.setAttribute()

// console.log(boucle)

const lien = document.querySelector('a');

lien.setAttribute("href", "https://developer.mozilla.org/fr/docs/Web/CSS/:nth-child");

lien.setAttribute("target", "blank");

let monAttribut =  lien.getAttribute("href");

const link = "https://developer.mozilla.org/fr/docs/Web/CSS/:nth-child";

if (monAttribut === link) {
    lien.setAttribute("href", "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in");
}

lien.classList.add("maclass");

let monAttribut2 =  lien.getAttribute("href");

console.log(lien);
console.log(monAttribut);
console.log(monAttribut2);

