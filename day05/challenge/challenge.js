/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 05 · CHALLENGE
 * GESTION DE PANIER E-COMMERCE
 * ─────────────────────────────────────────────────────────────
 *
 * 🏆 MISSION
 * Contexte : Vous codez la logique du panier d'achat d'une boutique en ligne.
 *
 * Consignes :
 * 1. Vous avez un tableau représentant les ID des articles dans le panier : panier = [101, 105, 101, 102].
 * 2. Créez une fonction ajouterAuPanier(id) qui ajoute l'article au tableau.
 * 3. Créez une fonction retirerDuPanier(id) qui retire Toutes les occurrences de cet ID du panier (ex: retirer 101).
 * 4. (Bonus) Créez une fonction afficherQuantites() qui compte et affiche le panier sous forme : Article 101 : 2 exemplaires, Article 105 : 1 exemplaire...
 *
 * 📖 Consigne détaillée : ./README.md
 * ▶️ Commande : node day05/challenge/challenge.js
 */
'use strict';

// Découpe d'abord le problème en petites étapes.
// TODO: écris ta solution ici.

let panier = [101, 105, 101, 102];

function ajouterAuPanier(id) {

    panier.push(id);

}
function retirerDuPanier(id) {

    for (let i = 0; i < panier.length; i++) {

        if (panier[i] === id) {

            panier.splice(i, 1);
            i--;
        }
    }

}
function afficherQuantites() {

    let compteur = {};

    for (let i = 0; i < panier.length; i++) {

        let id = panier[i];

        if (compteur[id] === undefined) {

            compteur[id] = 1;

        } else {

            compteur[id]++;
        }

    }

    for (let id in compteur) {
        console.log("Article " + id + " : " + compteur[id] + " exemplaires");
    }
}

ajouterAuPanier(103);
retirerDuPanier(101);
afficherQuantites();

// Article 105 : 1 exemplaires
// Article 102 : 1 exemplaires
// Article 103 : 1 exemplaires