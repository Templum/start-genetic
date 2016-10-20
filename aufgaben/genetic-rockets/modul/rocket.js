const Obstacle = Constanten.obstacle;

function Rocket(dna) {
    this.position = createVector(width / 2, height);
    this.velocity = createVector();
    this.acceleration = createVector();
    this.reachedTarget = false;
    this.crashed = false;
    this.fitness = 0;
    this.dna = (dna) ? dna : new DNA(); // Nutze übergebene DNA oder erstelle eine neue zufällige
}


/**
 * Diese Methode berrechnet die Fitness für die Rackete
 */
Rocket.prototype.calculateFitness = function () {
    //TODO: Implementieren
}

/**
 * Bewege die Rackete mittels der übegebenen Force
 * @param {p5.Vector} force
 */
Rocket.prototype.move = function (force) {
    this.acceleration.add(force);
}

/**
 * Diese Methode zeichnet die Rackete
 */
Rocket.prototype.display = function () {
    push();
    noStroke();
    fill(255, 150);
    translate(this.position.x, this.position.y);
    rotate(this.velocity.heading());
    rectMode(CENTER);
    rect(0, 0, 20, 5);
    pop();
}

/**
 * Diese Methode bewegt die Rackete, solang diese nicht gecracshed ist oder im ziel gelandet ist
 */
Rocket.prototype.update = function () {
    //TODO: Implementieren
}

/**
 * Diese Methode überprüft zum einen ob die Rackete das Ziel erreicht hat und zum anderen ob sie in das Hinderniss gekracht ist
 */
Rocket.prototype.check = function () {

    // Überprüfe ob es einen Crash mit dem Hinderniss gab
    if (this.position.x > Obstacle.pos.x && this.position.x < Obstacle.pos.x + Obstacle.width && this.position.y > Obstacle.pos.y && this.position.y < Obstacle.pos.y + Obstacle.height)
        this.crashed = true;
    //Überprüfe ob es einen Crash mit den Wänden gab
    if (this.position.x > width || this.position.x < 0)
        this.crashed = true;
    if (this.position.y > height || this.position.y < 0)
        this.crashed = true;

    // Überprüfe ob das Target erreicht wurde
    var d = dist(this.position.x, this.position.y, target.x, target.y);

    if (d < 10) {
        this.reachedTarget = true;
        this.position = target.copy(); // Steigert die Fitness
    }
}