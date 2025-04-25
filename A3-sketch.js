
var reloadOn = false;
var doneButton;
let checkbox;
var y = 145;
var z = 20;

function setup(){
    createCanvas(windowWidth, windowHeight);

    // -------------------------------------
    // !!!!! Code tutorial source: https://p5js.org/reference/p5/createCheckbox/
    // Check boxes
            // Produce
            checkbox = createCheckbox();
            checkbox.position(0, y);
            checkbox = createCheckbox();
            checkbox.position(0, y+z);

            // Dairy
            checkbox = createCheckbox();
            checkbox.position(0, y +( z * 3));
            checkbox = createCheckbox();
            checkbox.position(0, y +( z * 4));

            // Meat
            checkbox = createCheckbox();
            checkbox.position(0, y +( z * 6));
            checkbox = createCheckbox();
            checkbox.position(0, y +( z * 7));
        
            // Bread + Baked Goods
            checkbox = createCheckbox();
            checkbox.position(0, y +( z * 9));
            checkbox = createCheckbox();
            checkbox.position(0, y +( z * 10));

            // Other
            checkbox = createCheckbox();
            checkbox.position(0, y +( z * 12));
            checkbox = createCheckbox();
            checkbox.position(0, y +( z * 13));

        // !!!!! End of source code
        // -------------------------------------
        
        // Button
        doneButton = createButton("Press to make a new list");
        doneButton.position(0, 108);
        doneButton.mousePressed(function(){
            reloadOn = !reloadOn;
     })
    }

function draw(){

    if(reloadOn){
        // This one next line is from source: https://www.w3schools.com/jsref/met_loc_reload.asp
        location.reload();
    }

    if (checkbox.checked()) {
        background("lightgreen");
      } else {
        background("salmon");
    }

}
