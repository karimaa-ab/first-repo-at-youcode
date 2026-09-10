/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 02 · EXERCICE 02 · NIVEAU 1 : FONDATIONS (DÉBUTANTS)
 * NOMBRES PAIRS UNIQUEMENT
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Affichez tous les nombres pairs entre 0 et 20. (Astuce : incrémentez de 2 en 2, ou utilisez un if avec le modulo %).
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-02
 * ▶️ Commande : node day02/exercices/exercice-02.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.
//  incrémentez de 2 en 2
for (let i = 0; i <= 20; i += 2) {

    console.log(i);
}
// 0 2 4 6 8 10 12 14 16 18 20
// incrémentez de 1 en 1 et utilisez un if avec le modulo %
for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
// 0 2 4 6 8 10 12 14 16 18 20