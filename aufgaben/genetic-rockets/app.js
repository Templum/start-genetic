var cycle = 0;
var displayCycle;
var target;
var population;

function setup() {
    createCanvas(800, 800);

    displayCycle = createP(); // Erstellt ein <p> Element
    target = createVector(width / 2, 50);
    population = new Population();
}

function draw() {
    background(0);
    population.run();

    displayCycle.html(cycle++); // Schreibe Aktuellen Cycle in das erstellte <p> Element

    ellipse(target.x, target.y, 16, 16);

    if (cycle == Constanten.lifespan) {
        population.evaluation();
        population.selection();
        cycle = 0;
    }

    fill(255)
    rect(width / 2 - 250, height / 2 + 50, 500, 10)
}