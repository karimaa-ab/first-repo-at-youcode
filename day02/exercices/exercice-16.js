/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 02 · EXERCICE 16 · NIVEAU 3 : DÉFI (AVANCÉS)
 * SAPIN CENTRÉ
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Allez plus loin, dessinez une pyramide centrée de 5 lignes :
 *
 *     *
 *    *
 *   *
 *  *
 * -
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-16
 * ▶️ Commande : node day02/exercices/exercice-16.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici
let espace = "";
let etoile = "";

for (let i = 1; i <= 5; i++) {

    espace = "";
    etoile = "";

    // Ajouter les espaces
    for (let j = 1; j <= 5 - i; j++) {
        espace += " ";
    }

    // Ajouter les étoiles
    for (let k = 1; k <= 2 * i - 1; k++) {
        etoile += "*";
    }

    console.log(espace + etoile);
}
