// This function clear all the values
function clearScreen() {
    document.getElementById("result").value = "";
}

// This function display values
function display(e) {
    let el=e.target;
    let value=el.value;
    document.getElementById("result").value += value;
}
// This function evaluates the expression and return result
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}
function FindNAddListenerAll(selector,type,listener){
    let els=document.querySelectorAll(selector);
    els.forEach((el)=>{
        el.addEventListener(type,listener);
    });
}
// Execution
FindNAddListenerAll('#clear','click',clearScreen);
FindNAddListenerAll('#calculate','click',calculate);
FindNAddListenerAll('input[value]:not([id])','click',display);