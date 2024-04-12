

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