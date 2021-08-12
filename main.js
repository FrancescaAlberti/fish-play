function preload() {

    red_fish_swim = loadAnimation("img/red_swim/00___cartoon_fish_06_red_swim.png", "img/red_swim/11___cartoon_fish_06_red_swim.png");
    red_fish_idle = loadAnimation("img/red_idle/00___cartoon_fish_06_red_idle.png", "img/red_idle/11___cartoon_fish_06_red_idle.png");
    red_fish_swim.frameDelay = 20;
    red_fish_idle.frameDelay = 20;

    yellow_fish_swim = loadAnimation("img/yellow_swim/00___cartoon_fish_06_yellow_swim.png", "img/yellow_swim/11___cartoon_fish_06_yellow_swim.png");
    yellow_fish_idle = loadAnimation("img/yellow_idle/00___cartoon_fish_06_yellow_idle.png", "img/yellow_idle/11___cartoon_fish_06_yellow_idle.png");
    yellow_fish_swim.frameDelay = 20;
    yellow_fish_idle.frameDelay = 20;

}
let fishNumber = 5;
let fishSprite;

function setup() {
    createCanvas(800, 500);

    Fishes = new Group();
    //create fishes
    for (let i = 0; i < fishNumber; i++) {
        let fishColor = random(['yellow', 'red']);
        fishSprite = createSprite(random(100, width), random(0, height));
        fishSprite.scale = random(0.15, 0.30);
        fishSprite.addAnimation('fish_swim', eval(fishColor + "_fish_swim"));
        fishSprite.addAnimation('fish_idle', eval(fishColor + "_fish_idle"));
        fishSprite.setDefaultCollider();
        fishSprite.mirrorX(-1);
        fishSprite.setSpeed(1, 10);
        fishSprite.mouseActive = true;
        fishSprite.debug = false;

        Fishes.add(fishSprite);
    }

    // create walls
    wallsTB = new Group();
    let topBorder = createSprite(width / 2, -10, width, 10);
    let bottomBorder = createSprite(width / 2, height + 5, width, 10);
    topBorder.immovable = true;
    bottomBorder.immovable = true;
    wallsTB.add(topBorder);
    wallsTB.add(bottomBorder);

    wallsLR = new Group();
    let rightBorder = createSprite(width + 10, height / 2, 10, height);
    let leftBorder = createSprite(-10, height / 2, 10, height);
    rightBorder.immovable = true;
    leftBorder.immovable = true;
    wallsLR.add(rightBorder);
    wallsLR.add(leftBorder);

    //create food
    Food = new Group();
}

function draw() {
    background(color(240, 255, 255));
    Fishes.bounce(wallsTB);
    Fishes.bounce(wallsLR, changeDirection);
    /*     Fishes.collide(Food, eat);
        Food.collide(wallsTB);
        Food.displace(Food); */

    /*  if (Food.length > 0) {
         for (let i = 0; i < Fishes.length; i++) {
             for (let j = 0; i < Food.length; i++)
                 Fishes[i].attractionPoint(0.01, Food[j].position.x, Food[j].position.x)
         }
     } */
    drawSprites();

}

function changeDirection(target) {
    let currentMirrorX = target.mirrorX();
    target.mirrorX(currentMirrorX * -1);
}
/* 
function eat(fish, food) {
    if (fish.touching.right || fish.touching.left) {
        Food.remove(food);
        food.remove();
        debugger;
    }
} */

function mouseMoved() {
    if (typeof(Fishes) !== "undefined") {
        for (let i = 0; i < Fishes.length; i++) {
            if (Fishes[i].mouseIsOver) {
                Fishes[i].friction = 0.25;
                Fishes[i].changeAnimation('fish_idle');
            } else if (!Fishes[i].mouseIsOver && Fishes[i].getAnimationLabel() == 'fish_idle') {
                Fishes[i].friction = 0;
                Fishes[i].setSpeed(Fishes[i].mirrorX() * -1, 10);
                Fishes[i].changeAnimation('fish_swim');
            }
        }
    }
}
/* 
function mouseClicked() {

    let food = createSprite(mouseX, mouseY, 10, 10);
    food.setDefaultCollider();
    food.setSpeed(0.5, 90);
    food.debug = true;
    Food.add(food);
} */