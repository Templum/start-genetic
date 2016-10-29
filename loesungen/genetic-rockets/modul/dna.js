/**
 * Diese Methode erstellt eine DNA, welche die übergebenen Gene nutzt.
 * Falls keine Gene übergeben werden, werden zufällige erzeugt. 
 * @param {[]} genes
 */
function DNA(genes) {
    //TODO: Implementieren
    if (genes) {
        this.genes = genes;
    } else {
        this.genes = [];

        for (var i = 0; i < Constanten.lifespan; i++) {
            this.genes[i] = p5.Vector.random2D();
            this.genes[i].setMag(Constanten.maxForce);
        }
    }
}

/**
 * Diese Methode erzeugt eine neue DNA durch One-Point-Crossover mit dem übergebenen Partner
 * @param {DNA} partner Gene des partners
 */
DNA.prototype.crossover = function (partner) {
    //TODO: Implementieren

    //Hint: p5.Vector verfügt über eine methode setMag(double), hiermit kann man die Force beschränken siehe maxForce Kommentar

    var newgenes = [];
    var mid = floor(random(this.genes.length));

    for (var i = 0; i < this.genes.length; i++) {
        newgenes[i] = (i > mid) ? this.genes[i] : partner.genes[i]
    }
    return new DNA(newgenes);
}

/**
 * Diese Methode mutiert die Gene (zufällig).
 */
DNA.prototype.mutation = function () {
    //TODO: Implementieren

    for (var i = 0; i < this.genes.length; i++) {
        this.genes[i] = (random(1) < Constanten.mutationRate) ? p5.Vector.random2D() : this.genes[i];
        this.genes[i].setMag(Constanten.maxForce);
    }
}