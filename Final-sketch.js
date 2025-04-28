
// CONCEPTUALIZE!!!

// GENERAL
    // Buttons
        // DONE Scroll back to the top
        // DONE Menu buttons for each section (group buttons)
        // DONE Hidden Easter egg
            // DONE Image as alert button, the text "Hehe yay you found this little easter egg!" pops up
            // DONE (along with the menu buttons, it's still in its own container)
        // DONE Make everything look nice :]

// BACKGROUND
    // DONE BORDER
    // DONE BUBBLES
    // DONE SKY (in html)
        // NEED TO FIX If I have time I'd rather just have a blue background then have cloud objects show up randomly every time the page refreshes


// S1: POETRY
    // MAYBE NOT THIS ANYMORE Accordian, each poem has their own part
    // DONE Two columns in each part, left is the poem and right are my notes/comments

// S2: VIDEOS
    // DONE Videos (at least three?)

// S3: PICTURES
    // Gallery?
    // Links to some of my inspirations

// If I have time:
    // DONE Make the menu buttons individual divs, and make them fixed so it moves down too
    // Section off the pictures part by project (like the accordian but something else so it's not the same)
    // Audio
    // Buttons to show the video hidden behind it (maybe...)



// GENERAL
    // SCROLL TO THE TOP BUTTON
        // --------------------------------
        // !!!!! Code tutorial source 01: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
            // I used the same logic for the menu buttons
        var topButton = document.getElementById("topButton");
        window.onscroll = function(){
            scroll1Function();
            scroll2Function();
            scroll3Function();
            scroll4Function();
        };

        function scroll1Function(){
            if(document.documentElement.scrollTop > 100){
                topButton.style.display = "block";
            }else{
                topButton.style.display = "none";
            }
        }
        // When button clicked, the page scrolls here
        function topFunction(){
        document.documentElement.scrollTop = 0;
        }

    // MENU BUTTONS
        // POETRY BUTTON
            var poetryButton = document.getElementById("poetryButton");

            function scroll2Function(){
                if(document.documentElement.scrollTop > 100){
                    poetryButton.style.display = "block";
                }else{
                    poetryButton.style.display = "none";
                }
            }
            function poetryFunction(){
            document.documentElement.scrollTop = 400;
            }
        // FILM BUTTON
            var filmButton = document.getElementById("filmButton");

            function scroll3Function(){
                if(document.documentElement.scrollTop > 100){
                    filmButton.style.display = "block";
                }else{
                    filmButton.style.display = "none";
                }
            }
            function filmFunction(){
            document.documentElement.scrollTop = 2200;
            }
        // !!!!! End of source code 01
        // --------------------------------


// BACKGROUND
    // BORDER
        var frame = {
            // Idk why windowWidth wasn't working, but this does, so I'm using them for the whole project:
            x: window.innerWidth / 10,
            y: 50,
            w: window.innerWidth * 0.8,
            h: (window.innerHeight * 7.5) - 100,
            colour: "lightblue",
            draw: function(){
                stroke("white");
                strokeWeight(10);
                fill(this.colour);
                rect(this.x, this.y, this.w, this.h);
            }
        }

var animation = [];

    // BUBBLES
    function createBubbles(){
        var originx = random(width);
        var originy = random(height);

        for(var i = 0; i < 1; i++){
            var bubble = {
                x: originx,
                y: originy,
                w: 150,
                h: 150,
                xSpeed: 1,
                ySpeed: -2,
                colour: "white",
                draw: function(){
                        stroke("silver");
                        strokeWeight(3);
                        // Bubble
                        fill(this.colour);
                        push();
                        ellipse(this.x, this.y, this.w, this.h);
                        // Big Shiny 
                        ellipse(this.x + 30, this.y - 30, 10, 40);
                        // Small Shiny
                        ellipse(this.x + 45, this.y, 5, 20);              
                        pop();
                        this.update();
                },
                update: function(){
                    this.x += this.xSpeed;
                    this.y += this.ySpeed;
                    this.ySpeed -= 0.0005;
                }
            };
        }
        animation.push(bubble);
    }

    // FIRST WAVE OF BUBBLES
    function createWaves(){
        var wave = {
            x: 0,
            y: windowHeight,
            w: windowWidth / 5,
            h: windowWidth / 5,
            xSpeed: 1,
            ySpeed: -2,
            colour: "white",
            draw: function(){
                    stroke("silver");
                    strokeWeight(3);
                // BIG BUBBLE 1
                    // Bubble
                    fill(this.colour);
                    push();
                    ellipse(this.x, this.y + 120, this.w, this.h);
                    // Big Shiny 
                    ellipse(this.x + 30, this.y + 90, 10, 40);
                    // Small Shiny
                    ellipse(this.x + 45, this.y + 120, 5, 20);   
                    
                // BIG BUBBLE 2
                    // Bubble
                    fill(this.colour);
                    push();
                    ellipse(this.x + windowWidth * 0.2, this.y - 110, this.w, this.h);
                    // Big Shiny 
                    ellipse((this.x + windowWidth * 0.2) + 30, this.y - 140, 10, 40);
                    // Small Shiny
                    ellipse((this.x + windowWidth * 0.2) + 45, this.y - 110, 5, 20);   
                    
                // BIG BUBBLE 3
                    // Bubble
                    fill(this.colour);
                    push();
                    ellipse(this.x + windowWidth * 0.4, this.y + 105, this.w, this.h);
                    // Big Shiny 
                    ellipse((this.x + windowWidth * 0.4) + 30, this.y + 75, 10, 40);
                    // Small Shiny
                    ellipse((this.x + windowWidth * 0.4) + 45, this.y + 105, 5, 20);   
                    
                // BIG BUBBLE 4
                    // Bubble
                    fill(this.colour);
                    push();
                    ellipse(this.x + windowWidth * 0.6, this.y - 130, this.w, this.h);
                    // Big Shiny 
                    ellipse((this.x + windowWidth * 0.6) + 30, this.y - 160, 10, 40);
                    // Small Shiny
                    ellipse((this.x + windowWidth * 0.6) + 45, this.y - 130, 5, 20);   
                    
                // BIG BUBBLE 5
                    // Bubble
                    fill(this.colour);
                    push();
                    ellipse(this.x + windowWidth * 0.8, this.y, this.w, this.h);
                    // Big Shiny 
                    ellipse((this.x + windowWidth * 0.8) + 30, this.y - 30, 10, 40);
                    // Small Shiny
                    ellipse((this.x + windowWidth * 0.8) + 45, this.y, 5, 20);   
                          
                 // BIG BUBBLE 6
                    // Bubble
                    fill(this.colour);
                    push();
                    ellipse(this.x + windowWidth, this.y - 105, this.w, this.h);
                    // Big Shiny 
                    ellipse((this.x + windowWidth) + 30, this.y - 135, 10, 40);
                    // Small Shiny
                    ellipse((this.x + windowWidth) + 45, this.y - 105, 5, 20);   
                       
                    pop();
                    this.update();
            },
            update: function(){
                this.y += this.ySpeed;
                this.ySpeed -= 0.0005;
            }
        };
        animation.push(wave);
    }

function setup(){
    canva = createCanvas(window.innerWidth, window.innerHeight * 7.5);
    canva.position(0, 0);
    canva.style("z-index", "-1");

    createWaves();
    createBubbles();
}

function draw(){

    // Next line of code source: https://p5js.org/reference/p5/clear/
    // It helps to clear the canvas after every frame, so the bubbles don't leave a trace on the sky image
    clear();
    frame.draw();

    // FIRST WAVE OF BUBBLES
    for(wave of animation){
        wave.draw();
    }
    
    // BUBBLES
    for(bubble of animation){
        bubble.draw();
    }

    if(frameCount % 30 === 0){
        createBubbles();
    }

    animation = animation.filter(function(bubble){
        if(0 < bubble.x && bubble.x < window.innerWidth || 0 < bubble.y && bubble.y < window.innerHeight){
            return true;
        }else{
            return false;
        }
    });

}