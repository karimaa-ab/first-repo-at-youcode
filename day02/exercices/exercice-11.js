/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 02 · EXERCICE 11 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * PUISSANCE MANUELLE
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Calculez 2 à la puissance 10 en utilisant une boucle for (sans utiliser Math.pow ni ).
 *
 * RÉSULTAT ATTENDU
 * 1024
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-11
 * ▶️ Commande : node day02/exercices/exercice-11.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.
let result = 1;

for (let i = 1; i <= 10; i++) {
    result = result * 2; // ( 1 * 2 = 2, 2 * 2 = 4, 4 * 2 = 8, 8 * 2 = 16, 16 * 2 = 32, 32 * 2 = 64, 64 * 2 = 128, 128 * 2 = 256, 256 * 2 = 512, 512 * 2 = 1024)
}

console.log(result);
// 1024

