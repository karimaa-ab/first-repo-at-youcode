/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 05 · EXERCICE 13 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * COMPARAISON DE TABLEAUX
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction sontEgaux(tab1, tab2) qui vérifie si deux tableaux contiennent exactement les mêmes éléments 
 * dans le même ordre. (Rappel: [1] == [1] donne false en JS !).
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-13
 * ▶️ Commande : node day05/exercices/exercice-13.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.

function sontEgaux(tab1, tab2) {

    if (tab1.length !== tab2.length) {

        return false;

    }
    for (let i = 0; i < tab1.length; i++) {

        if (tab1[i] !== tab2[i]) {

            return false;
        }
    }

    return true;     // Si aucun élément n'est différent, les tableaux sont égaux 
}
// pour teste le code 

//ex 1 :
let tab1 = [1, 2, 3];
let tab2 = [1, 2, 3];

console.log(sontEgaux(tab1, tab2)); // true
// ex 2 :
let tab3 = [1, 2, 3];
let tab4 = [3, 2, 1];

console.log(sontEgaux(tab3, tab4)); // false
