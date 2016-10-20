function Population() {
    this.rockets = [];
    this.matingpool = []; // Optional je nach Selections Algorithmus

    // Erzeugen der initialen Bevölkerung
    for (var i = 0; i < Constanten.populationSize; i++) {
        this.rockets[i] = new Rocket();
    }

}

/**
 * Diese Methode updated jede Rackete und zeichnet sie anschließend
 */
Population.prototype.run = function () {
    for (var i = 0; i < Constanten.populationSize; i++) {
        this.rockets[i].update();
        this.rockets[i].display();
    }
}

/**
 * Diese Methode nutzt die Racketen im matingpool um mit die neue Generation zu erzeugen.
 */
Population.prototype.selection = function () {
    //TODO: Implementieren
}

/**
 * Diese Methode nutzt AlgorithmusXY zur zusammenstellung des matingpools
 */
Population.prototype.evaluation = function () {
    //TODO: Implementieren
}