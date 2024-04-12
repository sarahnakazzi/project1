function addToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculate(){
    let expression = 
    document.getElementById("display").value;
    let result = eval(expression);
    document.getElementById("display").value = result;
}

//this is javascript function for new calculator

function display(value){
    document.getElementById("result").value += value;
}
 
function del() {
     document.getElementById("result").value = document.getElementById("result").value.slice(0, -1)
}

function clearScreen() {
    document.getElementById("result").value = "";
}

function giveAns(){
    var a = document.getElementById("result").value;
    var b = eval(a);
    document.getElementById("result").value = b;
}