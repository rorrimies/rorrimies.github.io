
var rectangle = {
    x: 15,
    y: 15,
    w: 250,
    h: 500,
    colour: 'white',
    draw: function(){
        fill(this.colour);
        rect(this.x, this.y, this.w, this.h);
    }
}

var redbox = {
    x: 15,
    y: 15, 
    w: 50,
    h: 50,
    xSpeed: 1,
    ySpeed: 1,
    colour: 'lavender',
    draw: function(){
        fill(this.colour);
        rect(this.x, this.y, this.w, this.h);
    },
    move: function(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if(this.x < 16 || this.x > 264 - this.w){
            this.xSpeed *= -1;
        }

        if(this.y < 16 || this.y > 514 - this.h){
            this.ySpeed *= -1;
        }
    }
}

function setup(){
    createCanvas(280, 530);
    rectangle.draw();
    
}

function draw(){
    fill('lavender');
    stroke('lavender');
    rect(0, 0, 280, 15);
    rect(0, 515, 280, 15);
    rect(0, 0, 15, 530);
    rect(265, 0, 15,530);    

    fill('white');
    stroke('purple');
    ellipse(mouseX, mouseY, 20, 20);

    stroke('purple');
    redbox.draw();
    redbox.move();
}