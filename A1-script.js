
var changeDiv = document.getElementById("change");
console.log(changeDiv);

function DivWasClicked(){
    if(changeDiv.innerHTML === "Click this for a second fun fact!"){
        changeDiv.innerHTML = "The characters on the screen are known as BT21 :)";
    }
    else{
        changeDiv.innerHTML = "Click this for a second fun fact!";
    }        
}

changeDiv.onclick = DivWasClicked;
