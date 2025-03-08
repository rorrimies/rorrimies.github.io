var mickey = {
    x: 0,
    y: 0,
    w: 35,
    h: 35,
    colour: 'red',
    draw: function(){

        stroke('black');
        strokeWeight(3);
        fill(this.colour);
    
        //left ear
        ellipse(this.x, this.y, this.w, this.h);

        //right ear
        ellipse(this.x + 50, this.y, this.w, this.h);

        //body
        ellipse(this.x + 25, this.y + 25, this.w + 20, this.h + 20);
    }
}

var minnie = {
    x: 0,
    y: 0,
    w: 35,
    h: 35,
    colour: 'pink',
    draw: function(){

        stroke('black');
        strokeWeight(3);
        fill(this.colour);

        // left ear
        ellipse(this.x, this.y, this.w, this.h);

        //right ear
        ellipse(this.x + 50, this.y, this.w, this.h);

        //body
        ellipse(this.x + 25, this.y + 25, this.w + 20, this.h + 20);
    }
}

function setup(){
    createCanvas(windowWidth, windowHeight);}

function draw(){
    background('lightgrey');

    mickey.draw();
    minnie.draw();

    if(mouseX < windowWidth / 2 && mouseY < windowHeight / 2 || mouseX > windowWidth / 2 && mouseY > windowHeight / 2){
        mickey.x = mouseX;
        mickey.y = mouseY;
        mickey.draw();
    }
    else{
        minnie.x = mouseX;
        minnie.y = mouseY;
        minnie.draw();
    }
}