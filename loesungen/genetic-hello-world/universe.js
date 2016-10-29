const Individual = require('./individual');
class Universe {
    constructor(mutationRate, populationSize) {
        this.MUTATION_RATE = mutationRate ? mutationRate : 0.4;
        this.POPULATION_SIZE = populationSize ? populationSize : 1000;
        this.best = undefined;
        this.population = [];
        this.matingpool = [];
    }

    simulate() {
        this.init();

        var epoch = 1;

        while (this.best.fit !== 0) {
            console.log('Epoche:', epoch, "Current Best:", this.best.dna, "With Score:", this.best.fit);

            this.selection();
            this.reproduction();
            this.mutation();
            this.evaluation();

            epoch++;
        }
        console.log('Winner: ', this.best);
    }

    init() {
        for (var i = 0; i < this.POPULATION_SIZE; i++) {
            this.population.push(new Individual(undefined, "Hello World"));
        }
        this.evaluation();
    }

    evaluation() {
        this.population.forEach(function (element) {
            element.calcFitness();
        });

        this.population.sort((a, b) => {
            if (a.fit < b.fit)
                return -1;
            else if (a.fit > b.fit)
                return 1;
            else
                return 0;
        });

        this.best = this.population[0];
    }

    selection() {
        var elite = Math.floor(this.POPULATION_SIZE / 100 * 10);
        for (var i = 0; i < elite; i++) {
            this.matingpool.push(this.population[i]);
        }

        for (var i = elite; i < this.POPULATION_SIZE / 2; i++) {
            this.matingpool.push(this._tournament());
        }
    }

    reproduction() {
        for (var i = this.POPULATION_SIZE / 2; i < this.POPULATION_SIZE; i += 2) {
            var mother = this._findParent();
            var father = this._findParent();

            var childs = mother.reproduce(father);

            this.matingpool.push(childs.childA);
            this.matingpool.push(childs.childB);
        }
        this.population = this.matingpool;
        this.matingpool = [];
    }

    mutation() {

        var elite = Math.floor(this.POPULATION_SIZE / 100 * 10);
        for (var i = 0; i < this.POPULATION_SIZE; i++) {
            if (i > elite)
                this.population[i].mutate(this.MUTATION_RATE);
        }
    }

    _tournament() {
        var champion = this._randomIndividual();

        for (var i = 0; i < 10; i++) {
            var challenger = this._randomIndividual();
            champion = challenger.fit < champion.fit ? challenger : champion;
        }
        return champion;
    }

    _randomIndividual() {
        var index = Math.floor(Math.random() * this.POPULATION_SIZE);
        var selected = this.population[index];

        return new Individual(selected.dna, selected.target); // Copy Object, as otherwise we would modify the reference even when not intented 
    }

    _findParent() {
        var index = Math.floor(Math.random() * this.POPULATION_SIZE / 2);
        return this.matingpool[index];
    }
}

module.exports = Universe;