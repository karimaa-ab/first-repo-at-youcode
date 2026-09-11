/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 05 · EXERCICE 15 · NIVEAU 3 : DÉFI (AVANCÉS)
 * FUSION TRIÉE
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Vous avez deux tableaux DÉJÀ triés : [1, 3, 5] et [2, 4, 6].
 *  Écrivez un algorithme pour les fusionner en un seul tableau trié [1, 2, 3, 4, 5, 6] (sans utiliser .sort()).
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-15
 * ▶️ Commande : node day05/exercices/exercice-15.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.

let num1 = [1, 3, 5];
let num2 = [2, 4, 6];

function fusionner(num1, num2) {

    let result = [];      // Tableau vide pour mettre les éléments dans le bon ordre

    let i = 0; // i suit les éléments de num1
    let j = 0; // j suit les éléments de num2 

    while (i < num1.length && j < num2.length) {
        // On compare le premier élément de chaque tableau
        // 1 < 2 → on prend 1
        if (num1[i] < num2[j]) {

            // On ajoute 1 dans le nouveau tableau
            // resultat = [1]
            result.push(num1[i]);

            // On passe à l'élément suivant de num1
            // i = 1 → num[i] = 3
            i++;

        } else {
            // Exemple : 3 > 2 → on prend 2
            // resultat = [1, 2]

            result.push(num2[j]);

            // On passe à l'élément suivant de num2
            // j = 1 → num2[j] = 4

            j++;
            // Ensuite on continue les comparaisons :
            // 3 < 4 → on prend 3
            // resultat = [1, 2, 3]
            // 5 > 4 → on prend 4
            // resultat = [1, 2, 3, 4]
            // 5 < 6 → on prend 5
            // resultat = [1, 2, 3, 4, 5]}

        }
    }

    // On vérifie aussi s'il reste des éléments dans num1
    while (i < num1.length) {

        // On ajoute les éléments restants de num1
        result.push(num1[i]);
        i++;
    }
    // À ce moment, un des deux tableaux peut être terminé.
    // Ici, num1 est terminé et il reste 6 dans num2.
    // On ajoute tous les éléments restants de num2.

    while (j < num2.length) {
        result.push(num2[j]);
        j++;
    }

    // On retourne le tableau final trié
    return result;
}
console.log(fusionner(num1, num2)); //[1, 2, 3, 4, 5, 6]