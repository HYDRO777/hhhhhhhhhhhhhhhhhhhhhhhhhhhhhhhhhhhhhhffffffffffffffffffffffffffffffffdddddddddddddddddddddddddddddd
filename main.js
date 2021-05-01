function getParagraph1(){
    var inputs = [];
    for (var i = 1; i <= 6 ; i++) {
        inputs.push(document.getElementById("p1ib" + i).value);
        inputs.join(".");
        document.getElementById("p1").innerHTML = inputs.join(".");
        
    }
}
function getParagraph2(){
    var inputsp2 = [];
    for (var i = 1; i <= 6 ; i++) {
        inputsp2.push(document.getElementById("p2ib" + i).value);
        inputsp2.join(".");
        document.getElementById("p2").innerHTML = inputsp2.join(".");
        
    }
}