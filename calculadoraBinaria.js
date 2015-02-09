function changer (id, newValue) {
    var element = document.getElementById(id);
    element.innerHTML = newValue;
}

var op;

function sum (){
    var element = document.getElementById("display");
    if(element.innerHTML){
        op = element.innerHTML;
        changer("display", "");
    }else{
        alert("Debe aparecer un número en la zona verde para realizar la operación seleccionada.");
    }
}

function solution(){
    var element = document.getElementById("display");
    if(element.innerHTML){
        var result = parseInt(op) ^ parseInt(element.innerHTML);
        changer("display", result);
    }else{
        alert("Debe aparecer un número en la zona verde para realizar la operación seleccionada.");
    }
}
