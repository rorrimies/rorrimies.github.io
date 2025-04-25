
var pinkbox = {
    x: 0,
    y: 0,
    w: 250,
    h: 250,
    xSpeed: 10,
    colour: 'pink',
    draw: function (){
        fill(this.colour);
        stroke(this.colour);
        rect(this.x - this.w, this.y, this.w, this.h);  
    },
    move: function(){
        if(this.x < 750){
            this.x += this.xSpeed;
        }
        if(purplebox.y < -250){
            this.x = 0;
        }
    }
}
var greenbox = {
    x: 250,
    y: 0,
    w: 250,
    h: 250,
    ySpeed: 10,
    colour: 'lightgreen',
    draw: function(){
        fill(this.colour);
        stroke(this.colour);
        rect(this.x, this.y - this.h, this.w, this.h);
    },
    move: function(){
        // Source code for "logical and": https://www.w3schools.com/js/js_operators.asp 
        if(pinkbox.x > 625 && this.y < 750){
        // End of source code
            this.y += this.ySpeed;
        }
    }
}
var bluebox = {
    x: 500,
    y: 250,
    w: 250,
    h: 250,
    xSpeed: -10,
    colour: 'lightblue',
    draw: function(){
        fill(this.colour);
        stroke(this.colour);
        rect(this.x, this.y, this.w, this.h);
    },
    move: function(){
        if(greenbox.y > 500 && this.x > -250){
            this.x += this.xSpeed;
        }
    }
}
var purplebox = {
    x: 0,
    y: 500,
    w: 250,
    h: 250,
    ySpeed: -10,
    colour: 'lavender',
    draw: function(){
        fill(this.colour);
        stroke(this.colour);
        rect(this.x, this.y, this.w, this.h);
    },
    move: function(){
        if(bluebox.x < 0 && this.y > -250){
            this.y += this.ySpeed;
        }
    }
}

function magic(){
    pinkbox.draw();
    pinkbox.move();

    greenbox.draw();
    greenbox.move();

    bluebox.draw();
    bluebox.move();

    purplebox.draw();
    purplebox.move( );
}

function setup(){
    createCanvas(windowWidth, windowHeight);

    // Repeating blue square background (I purposely put it here)
    fill('lightgrey');
    stroke('white');

    for(var i = 0; i < 10000; i++){
        rect((i*10)%innerWidth, (i*10)%innerHeight, 20, 20);
    }
}
function draw(){
    // Moving shapes
    //Unsure why this doesn't loop, and instead when increasing the value in i < # it runs once but faster:
    for(var i = 0; i < 3; i++){
        magic();
    }
}