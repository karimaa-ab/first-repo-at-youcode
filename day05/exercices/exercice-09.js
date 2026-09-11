/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 05 · EXERCICE 09 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * FILTRAGE MANUEL (LES PAIRS)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction qui prend un tableau de nombres, par exemple [1, 2, 3, 4, 5, 6], et
 *  retourne un NOUVEAU tableau ne contenant que les nombres pairs.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-09
 * ▶️ Commande : node day05/exercices/exercice-09.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.

function tabnumbers(tableau) {
    let pairs = [];
    for (let i = 0; i < tableau.length; i++) {
        if (tableau[i] % 2 === 0) {
            pairs.push(tableau[i]); // Ajoute le nombre pair au nouveau tableau  exemple: si tableau[i]=2 , pairs.push(2) => pairs = [2]
        }
    }
    return pairs;
}
let tableau = [1, 2, 3, 4, 5, 6];
console.log(tabnumbers(tableau)); // Affiche le tableau des nombres pairs : [2, 4, 6]