class Taxe {
   constructor(salaireBrut, genre, nb_enfants, charges, assurances, cotisations, frais_totaux, salaire_Net) {
       this.salaireBrut = salaireBrut;
       this.genre = genre;
       this.nb_enfants = nb_enfants;
       this.charges = charges;
       this.assurances = assurances;
       this.cotisations = cotisations;
       this.frais_totaux = frais_totaux;
       this.salaire_Net = salaire_Net;
   }
   CalculFraisTotaux() {
       var montantCharges = 0;
       montantCharges = (this.salaireBrut * 18) / 100;
       var montantAssurance = 0;
       montantAssurance = (this.salaireBrut * 7) / 100;
       var montantCotisation = 0;
       montantCotisation = (this.salaireBrut * 5) / 100;
       var montantTotal = montantCharges + montantAssurance + montantCotisation;
       var montantFemme= 0;
       var montant3Enfants = 0;
       var montant4Enfants = 0;
       
       if (this.genre == 0) {
           montantFemme = (montantTotal * 2 / 100);
       }
       if (this.nb_enfants == 3) {
           montant3Enfants = (montantTotal * 1 / 100);
       } else if (this.nb_enfants >= 4) {
           montant4Enfants = (montantTotal * 2 / 100);
       }
       this.frais_totaux = montantTotal -montantFemme - montant3Enfants - montant4Enfants;

   }

   CalculSalaireNet() {
         this.salaire_Net = this.salaireBrut - this.frais_totaux;
   }
}