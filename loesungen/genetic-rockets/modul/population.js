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

    var newpopulation = [];

    for (var i = 0; i < this.rockets.length; i++) {
        var mother = random(this.matingpool).dna;
        var father = random(this.matingpool).dna;

        while (mother === father)
            father = random(this.matingpool).dna;

        var child = mother.crossover(father);
        child.mutation();

        newpopulation[i] = new Rocket(child);
    }
    this.rockets = newpopulation;
}

/**
 * Diese Methode nutzt AlgorithmusXY zur zusammenstellung des matingpools
 */
Population.prototype.evaluation = function () {
    //TODO: Implementieren

    var maxfit = 0;
    this.matingpool = [];

    for (var i = 0; i < Constanten.populationSize; i++) {
        this.rockets[i].calculateFitness();
        maxfit = (this.rockets[i].fitness > maxfit) ? this.rockets[i].fitness : maxfit;
    }

    console.log(maxfit);

    for (var i = 0; i < Constanten.populationSize; i++) {
        this.rockets[i].fitness /= maxfit;
    }

    for (var i = 0; i < Constanten.populationSize; i++) {
        var n = this.rockets[i].fitness * 100;

        for (var j = 0; j < n; j++) {
            this.matingpool.push(this.rockets[i]);
        }
    }
}