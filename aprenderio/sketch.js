let shapes = [];

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('canvas-container');
    
    for (let i = 0; i < 15; i++) {
        shapes.push(new FloatingShape());
    }
}

function draw() {
    background(15, 23, 42);
    
    for (let s of shapes) {
        s.update();
        s.display();
    }
}

class FloatingShape {
    constructor() {
        this.x = random(width);
        this.y = random(height);
        this.size = random(40, 100);
        this.type = floor(random(3)); // 0: quadrado, 1: triângulo, 2: círculo
        this.velX = random(-0.5, 0.5);
        this.velY = random(-0.5, 0.5);
        this.rot = random(TWO_PI);
        this.rotVel = random(0.01, 0.02);
    }

    update() {
        this.x += this.velX;
        this.y += this.velY;
        this.rot += this.rotVel;

        // Rebater nas bordas
        if (this.x < 0 || this.x > width) {
            this.velX *= -1;
        }
        if (this.y < 0 || this.y > height) {
            this.velY *= -1;
        }
    }

    display() {
        noFill();
        stroke(51, 65, 85, 100);
        strokeWeight(1);
        
        push();
        translate(this.x, this.y);
        rotate(this.rot);
        
        if (this.type === 0) {
            rect(-this.size/2, -this.size/2, this.size, this.size);
            
        } else if (this.type === 1) {
            triangle(0, -this.size/2, -this.size/2, this.size/2, this.size/2, this.size/2);
        
        } else ellipse(0, 0, this.size);
        
        pop();
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
