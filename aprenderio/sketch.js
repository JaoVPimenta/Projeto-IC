let formas = []

function setup() {
    
    let tela = createCanvas(largura, altura)
    tela.parent('container-fundo')

    // cria 15 formas
    for(let i = 0; i < 15; i++) {
        formas.push(new FloatingShape())
    }
}

function desenho() {
    
    background(15, 23, 42)

    for(let i of formas) {
        i.update()
        i.display()
    }
}

class FloatingShape {
    constructor() {
        this.x = random(largura)
        this.y = random(altura)
        this.size = random(40, 100)
        this.type = floor(random(3))
        this.velX = random(-0.5, 0.5)
        this.velY = random(-0.5, 0.5)
        this.rot = random(TWO_PI)
        this.rotVel = random(0.01, 0.02)
    }

    update() {
        this.x += this.velX
        this.y += this.velY
        this.rot += this.rotVel

        // rebater nas bordas
        if (this.x < 0 || this.x > largura) {
            this.velX *= -1
        }

        if (this.y < 0 || this.y > altura) {
            this.velY *= -1
        }
    }

    display() {

        noFill()
        stroke(51, 65, 85, 100)
        strokeWeight(1)

        push()
        translate(this.x, this.y)
        rotate(this.rot)

        if (this.type === 0) {
            // retângulo
            rect(-this.size/2, -this.size/2, this.size, this.size)

        } else if (this.type === 1) {
            // triângulo
            triangle(0, -this.size/2, -this.size/2, this.size/2, this.size/2, this.size/2)
        } else {
            ellipse(0, 0, this.size);
        }

        pop();
    }
}

function windowResized() {
    resizeCanvas(largura, altura)
}