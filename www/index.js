function calcular(){
    var cachorro = document.getElementById("cachorro").value;
    var gato = document.getElementById("gato").value;

    var consumo = cachorro / gato;
    document.getElementById("coelho").innerHTML = consumo;
}