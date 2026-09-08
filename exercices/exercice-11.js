/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 01 · EXERCICE 11 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * VALIDATION DE PANIER
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Un client achète un panier de 350 MAD. S'il dépasse 200 MAD, la livraison est gratuite. S'il dépasse 500 MAD, il a en plus 10% de réduction. Affichez le 
   coût final du panier et si la livraison est gratuite ou non.
 *
 * RÉSULTAT ATTENDU
 * Coût final: 350 MAD, Livraison: Gratuite
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-11
 * ▶️ Commande : node day01/exercices/exercice-11.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.

let panier = 350;
let livraisone = "payante";
let reduction = 0;

if (panier > 500) {
    reduction = panier * 0.10;
}
if (panier > 200) {
    livraisone = "gratuite";
}

let coutFinal = panier - reduction;
console.log(`Coût final: ${coutFinal} MAD, Livraison: ${livraisone}`);
// Coût final: 350 MAD, Livraison: gratuite ( panier = 350 <500 donc pas de réduction, panier = 350 > 200 donc livraison gratuite)