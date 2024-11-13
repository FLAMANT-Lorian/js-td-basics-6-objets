/*****************************
 * 030 - OBJETS + BOUCLES + TESTS + FONCTIONS - CODING CHALLENGE 5
 */

/*
Vous vous souvenez du challenge du calculateur de pourboire ?
Créons une version plus avancée en utilisant tout ce que nous avons appris !

Cette fois, John et sa famille sont allés dans 5 restaurants différents.
Les factures ont été de $124, $48, $268, $180 et $42.
John aime laisser un pourboire de 20% quand la facture est inférieure à $50,
15% quand la facture est entre $50 et $200, et 10% si la facture est plus de $200.

Implémente un calculateur de pourboire en utilisant les objets et les boucles.
1. Crée un objet avec un tableau pour les montants des factures
2. Ajoute une méthode pour calculer le pourboire
3. Cette méthode devrait inclure une boucle pour itérer à travers toutes les factures payées
    et faire le calcul du pourboire
4. En sortie, crée
    1°) un nouveau tableau qui contient toutes les factures
    2°) un tableau qui contient les montants finaux payés (facture + pourboire).
AIDE : Commence avec deux tableaux vides en tant que propriétés
        et remplis-les dans la boucle

*/
/*
BONUS (EXTRA) APRÈS AVOIR FINI :

La famille de Mark est aussi partie en vacances, et est allée dans 4 restaurants différents.
Les factures ont été de $77, $375, $110, et $45.
Mark aime laisser un pourboire de 20% quand la facture est moins de $100,
10% pour une facture entre $100 et $300, et 25% pour une facture de plus de $300
(différent de John).

5. Implémente les mêmes fonctionnalités qu'avant, cette fois avec les règles de pourboire de Mark.
6. Crée une fonction (pas une méthode) pour calculer la moyenne d'un tableau de pourboires donné.
INDICE : Boucle sur le tableau et, à chaque itération, stocke la somme courante dans une variable
(en commençant à 0). Une fois que tu as la somme du tableau, divise-la par le nombre d'éléments
du tableau (c'est comme cela qu'on calcule une moyenne).
7. Calcule le pourboire moyen pour chaque famille
8. Affiche qui a payé le pourboire le plus élevé en moyenne.

BONNE CHANCE 😀
*/


const mark = {
    montants: [77, 375, 110, 45],
    pourboires: [],
    montantsFinaux: [],
}

let sum = 0;

function pourboireMark() {
    for (let i = 0; i < mark.montants.length; i++) {
        if (mark.montants[i] < 50) {
            mark.pourboires.push(mark.montants[i] * 0.2);
        } else if (mark.montants[i] < 200) {
            mark.pourboires.push(mark.montants[i] * 0.15)
        } else {
            mark.pourboires.push(mark.montants[i] * 0.1)
        }
        mark.montantsFinaux.push(mark.pourboires[i] + mark.montants[i]);
    }
    for (let i = 0; i < mark.montants.length; i++) {
        sum += (mark.pourboires[i] / mark.pourboires.length);
    }
    console.log(`Données de mark :`);
    console.log(mark.montants);
    console.log(mark.pourboires);
    console.log(mark.montantsFinaux);
    console.log(`Pourboire moyen de Mark : ${sum}`);
    console.log('----------------------------------------------------------------------');
}

const jhon = {
    montants: [124, 48, 268, 180, 42],
    pourboires: [],
    montantsFinaux: [],
    sum: 0,
    calcPourboire() {
        for (let i = 0; i < this.montants.length; i++) {
            if (this.montants[i] < 50) {
                this.pourboires.push(this.montants[i] * 0.2);
            } else if (this.montants[i] < 200) {
                this.pourboires.push(this.montants[i] * 0.15);
            } else {
                this.pourboires.push(this.montants[i] * 0.1);
            }
            this.montantsFinaux.push(this.pourboires[i] + this.montants[i]);
        }
        for (let i = 0; i < this.pourboires.length; i++) {
            this.sum += (this.pourboires[i]) / this.pourboires.length;
        }
        console.log(`Données de Jhon :`);
        console.log(this.montants);
        console.log(this.pourboires);
        console.log(this.montantsFinaux);
        console.log(`Pourboire moyen de Jhon : ${this.sum}`);
    }
};

pourboireMark();
jhon.calcPourboire();

console.log('----------------------------------------------------------------------');
if (jhon.sum > sum) {
    console.log(`C'est Jhon qui donne en moyenne des pourboires plus élevé !`);
} else if (jhon.sum < sum) {
    console.log(`C'est Mark qui donne en moyenne des pourboires plus élevé !`);
} else {
    console.log(`Il paye en moyenne la même somme en pourboire`);
}

