/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 02 · EXERCICE 20 · NIVEAU 3 : DÉFI (AVANCÉS)
 * CHASSEUR DE NOMBRES D'ARMSTRONG
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Un nombre d'Armstrong à 3 chiffres est égal à la somme des cubes de ses chiffres (ex: 153 = 1³ + 5³ + 3³).
 *  Utilisez une boucle allant de 100 à 999 pour trouver et afficher TOUS les nombres d'Armstrong.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-20
 * ▶️ Commande : node day02/exercices/exercice-20.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.

for (let nombre = 100; nombre <= 999; nombre++) {

    let centaine = Math.floor(nombre / 100);
    let dizaine = Math.floor((nombre / 10) % 10);
    let unite = nombre % 10;

    let somme = (centaine * centaine * centaine)
        + (dizaine * dizaine * dizaine)
        + (unite * unite * unite);

    if (somme === nombre) {
        console.log(nombre);
    }
}
// 153 370 371 407