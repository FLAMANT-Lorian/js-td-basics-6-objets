/*****************************
 * 027 - OBJETS - CODING CHALLENGE 4
 */

/*
Souvenons-nous du premier challenge de code où Mark et John comparaient leurs BMIs.
Implémentons à présent la même fonctionnalité avec des objets, des propriétés et des méthodes.
1. Pour chacun, crée un objet avec
    - les propriétés pour leur nom complet, leur poids et leur taille
    - une méthode qui calcule le BMI
        (enregistre le BMI dans l'objet et, en plus, le retourne à partir de la méthode)
2. Affiche dans la console qui a le BMI le plus élevé avec le nom complet et le BMI.
    N'oublie pas qu'il pourrait y avoir un ex æquo.

Rappel: BMI = poids / taille^2 = poids / (taille * taille). (poids en kg and taille en mètres).

BONNE CHANCE 😀
*/
const jhonBMI = {
    name: 'Jhon',
    poids: 87,
    taille: 1.79,
    calcJhonBMI(){
        return this.BMI = this.poids / Math.pow(this.taille, 2);
    }
};

const markBMI = {
    name: 'Jhon',
    poids: 98,
    taille: 1.67,
    calcMarkBMI(){
        return this.BMI = this.poids / Math.pow(this.taille, 2);
    }
};

if (markBMI.calcMarkBMI() > jhonBMI.calcJhonBMI()){
    console.log(`Mark à un BMI plus élevé que Jhon !`);
} else if (markBMI.calcMarkBMI() < jhonBMI.calcJhonBMI()){
    console.log(`Jhon à un BMI plus élevé que Mark !`);
} else {
    console.log(`Mark à un BMI égal à celui de Jhon !`);
}