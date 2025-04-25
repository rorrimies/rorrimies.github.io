
// conceptualize the idea

// rotating stars + shapes
// one row of stars, then after one full spin, a row of another shape appears (w/ push() function), repeat
// SHAPES: https://www.w3schools.com/charsets/ref_utf_symbols.asp
// ROTATE: https://p5js.org/examples//transformation-rotate/

// different shapes
// different sizes
// shrink + grow (if + else statement)
// buttons to change the direction that the shapes move
// rotate CW + CCW (if + else statement with buttons)
// Maybe I'll have like 3 shapes in the array already, then add and remove things later

var shapes = [];

function createDiamonds(){
    var originx = random(width);
    var originy = random(height);
    for(var i = 0; i < 1; i++){
        var diamond = {
            x: originx,
            y: originy,
            alpha: 255,
            rotation: random(TWO_PI),
            colour: color(random(255), random(255), random(255),this.alpha),
            draw: function(){
                strokeWeight(5);
                stroke("white");
                fill(this.colour);
                push();
                // -------------------------------
                // !!!!! Code tutorial source: https://p5js.org/examples//transformation-rotate/
                // It lets the shapes rotate around the centre of the page
                translate(width/2, height/2);
                rotate(this.rotation);
                // !!!!! End of source code
                // -------------------------------
                // ---------------------------------------------------------
                // !!!!! Code tutorial source: https://p5js.org/reference/p5/quad/
                quad(this.x, this.y, this.x + 200, this.y - 100, this.x, this.y - 200, this.x - 200, this.y - 100);
                 // !!!!! End of source code
                // ---------------------------------------------------------
                pop();
                this.update();
            },
            update: function(){
                this.colour.setAlpha(this.alpha);
                this.rotation += 0.005;
            },
        };
        shapes.push(diamond);
    }
    
}

function createTangles(){
    var originx = random(width);
    var originy = random(height);
    for(var i = 0; i < 1; i++){
        var tangle = {
            x: originx,
            y: originy,
            w: 50,
            h: 200,
            alpha: 255,
            rotation: random(TWO_PI),
            colour: color(random(255), random(255), random(255),this.alpha),
            draw: function(){
                strokeWeight(5);
                stroke("white");
                fill(this.colour);
                push();
                // -------------------------------
                // !!!!! Code tutorial source: https://p5js.org/examples//transformation-rotate/
                // It lets the shapes rotate around the centre of the page
                translate(width/2, height/2);
                rotate(this.rotation);
                // !!!!! End of source code
                // -------------------------------
                rect(this.x,this.y, this.w, this.h);
                pop();
                this.update();
            },
            update: function(){
                this.colour.setAlpha(this.alpha);
                this.rotation += 0.005;
            },
        };
        shapes.push(tangle);
    }
}

function createIangles(){
    var originx = random(width);
    var originy = random(height);
    for(var i = 0; i < 1; i++){
        var iangle = {
            x: originx,
            y: originy,
            alpha: 255,
            rotation: random(TWO_PI),
            colour: color(random(255), random(255), random(255),this.alpha),
            draw: function(){
                strokeWeight(5);
                stroke("white");
                fill(this.colour);
                push();
                // -------------------------------
                // !!!!! Code tutorial source: https://p5js.org/examples//transformation-rotate/
                // It lets the shapes rotate around the centre of the page
                translate(width/2, height/2);
                rotate(this.rotation);
                // !!!!! End of source code
                // -------------------------------
                triangle(this.x, this.y, this.x+300, this.y+300, this.x-300, this.y+300);
                pop();
                this.update();
            },
            update: function(){
                this.colour.setAlpha(this.alpha);
                this.rotation += 0.005;
            },
        };
        shapes.push(iangle);
    }
}

function setup(){
    createCanvas(windowWidth, windowHeight);
    createDiamonds();
    createTangles();
    createIangles();
}

function draw(){
    background('lightpink');

    for(diamond of shapes){
        diamond.draw();
    }
    for(tangle of shapes){
        tangle.draw();
    }
    for(iangle of shapes){
        iangle.draw();
    }

    if(frameCount % 10 === 0){
        createDiamonds();
    }
    if(frameCount % 10 === 0){
        createTangles();
    }
    if(frameCount % 10 === 0){
        createIangles();
    }
    
    shapes = shapes.filter(function(diamond){
        if(windowWidth < diamond.x || windowWidth > diamond.x || windowHeight < diamond.y || windowHeight > diamond.y){
            return true;
        }else{
            return false;
        }
    });
    shapes = shapes.filter(function(tangle){
        if(windowWidth < tangle.x || windowWidth > tangle.x || windowHeight < tangle.y || windowHeight > tangle.y){
            return true;
        }else{
            return false;
        }
    });
    shapes = shapes.filter(function(iangle){
        if(windowWidth < iangle.x || windowWidth > iangle.x || windowHeight < iangle.y || windowHeight > iangle.y){
            return true;
        }else{
            return false;
        }
    });

    strokeWeight(5);
    stroke("hotpink");
    textSize(30);
    fill("white");
    text(shapes.length, 50, 50);

    if(shapes.length > 100){
        shapes.pop(diamond);
        shapes.pop(tangle);
        shapes.pop(iangle);
    }

}
