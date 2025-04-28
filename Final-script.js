

// EASTER EGG
var egg = document.getElementById("egg");
console.log(egg);

egg.onclick = function(){
    alert("Hehe yay you found this little easter egg!");
}

// VIDEOS
// ---------------------------------------------------------------------------------------------------------------
// !!!!! Code tutorial source 01: https://www.w3schools.com/html/html5_video.asp
var LOGO = document.getElementById("logo");
var ABCS = document.getElementById("abcs");
var EXCERCISES = document.getElementById("exercises");
var STARDEW = document.getElementById("stardew");

function playpause1(){
    if(LOGO.paused){
        LOGO.play();
    }else{
        LOGO.pause();
    }
}
function playpause2(){
    if(EXCERCISES.paused){
        EXCERCISES.play();
    }else{
        EXCERCISES.pause();
    }
}
function playpause3(){
    if(ABCS.paused){
        ABCS.play();
    }else{
        ABCS.pause();
    }
}
function playpause4(){
    if(STARDEW.paused){
        STARDEW.play();
    }else{
        STARDEW.pause();
    }
}

// !!!!! End of source code 01 */
// ---------------------------------------------------------------------------------------------------------------
