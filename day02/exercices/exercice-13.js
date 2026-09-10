/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 02 · EXERCICE 13 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * SUITE DE FIBONACCI
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Générez et affichez les 10 premiers nombres de la suite de Fibonacci. (La suite commence par 0, 1.
 *  Ensuite, chaque nombre est la somme des deux précédents : 0, 1, 1, 2, 3, 5, 8, 13...).
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-13
 * ▶️ Commande : node day02/exercices/exercice-13.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.

let a = 0;
let b = 1;

for (let i = 1; i <= 10; i++) {
    console.log(a);   // Afficher le nombre actuel

    let nouveau = a + b;

    a = b; // Le deuxième nombre devient le premier

    b = nouveau; // Le nouveau nombre devient le deuxième
}
// 0 1 1 2 3 5 8 13 21 34