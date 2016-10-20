/**
 * Diese Methode erstellt eine DNA, welche die übergebenen Gene nutzt.
 * Falls keine Gene übergeben werden, werden zufällige erzeugt. 
 * @param {[]} genes
 */
function DNA(genes) {
    //TODO: Implementieren
}

/**
 * Diese Methode erzeugt eine neue DNA durch One-Point-Crossover mit dem übergebenen Partner
 * @param {DNA} partner Gene des partners
 */
DNA.prototype.crossover = function (partner) {
    //TODO: Implementieren

    //Hint: p5.Vector verfügt über eine methode setMag(double), hiermit kann man die Force beschränken siehe maxForce Kommentar
}

/**
 * Diese Methode mutiert die Gene (zufällig).
 */
DNA.prototype.mutation = function () {
    //TODO: Implementieren
}