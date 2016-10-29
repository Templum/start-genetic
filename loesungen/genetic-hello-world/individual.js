class Individual {
    constructor(dna, target) {
        this.target = target;
        this.dna = dna ? dna : this.generateRandomDna();
        this.fit = -1;
    }

    mutate(mutationRate) {
        var mutation = "";
        for (var i = 0; i < this.dna.length; i++) {
            mutation += (Math.random() < mutationRate) ? this.randomChar() : this.dna[i];
        }
        this.dna = mutation;
        this.fit = -1;
    }

    generateRandomDna() {
        var dna = "";

        for (var i = 0; i < this.target.length; i++) {
            dna += this.randomChar();
        }
        return dna;
    }

    calcFitness() {
        var hammingDistance = 0;

        for (var i = 0; i < this.target.length; i++) {
            if (this.target[i] !== this.dna[i])
                hammingDistance += 1;
        }
        this.fit = hammingDistance;
    }

    reproduce(partner) {
        var offspringA = "";
        var offspringB = "";

        var crossOverPoint = Math.floor(Math.random() * (this.dna.length - 2) + 1); // Random Integer between 1 and length - 2

        for (var i = 0; i < this.dna.length; i++) {
            if (i < crossOverPoint) {
                offspringA += this.dna[i];
                offspringB += partner.dna[i];
            } else {
                offspringA += partner.dna[i];
                offspringB += this.dna[i];
            }
        }
        return { childA: new Individual(offspringA, this.target), childB: new Individual(offspringB, this.target) };
    }

    randomChar() {
        var ALPHABET = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
            "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
            " ", ","];
        var index = Math.floor(Math.random() * ALPHABET.length);
        return ALPHABET[index];
    }
}

module.exports = Individual;