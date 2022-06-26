img = "";

function setup() {
    canvas = createCanvas(800, 500);
    canvas.center();
}

function preload() {
    img = loadImage('dog_cat.jpg');
}

function draw() {
    image(img, 0, 0, 800, 500);
    fill("red");
    stroke("red");
    text("Dog",110,80);
    noFill();
    rect(100,60,400,350);
}