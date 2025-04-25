var silly = document.getElementById("silly");
console.log(silly);

function DivWasClicked(){
    if(silly.innerHTML === "Click me if you need help looking for groceries :)"){
        silly.innerHTML = "Sorry haha, I have no clue! XD Ask an employee maybe?";
    }
    else{
        silly.innerHTML = "Click me if you need help looking for groceries :)";
    }   
}

silly.onclick = DivWasClicked;
