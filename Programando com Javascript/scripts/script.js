function mensagem(){ 
    document.getElementById("informar").innerHTML = "Olá Mundo";
    window.onload= null;
}

function informar() {
    let numero = document.getElementById("number1").value;
    let informar = document.getElementById("informar");
    
    informar.innerHTML = "Numero informado:   " + numero;
}

function somar() {
    let numero1 = document.getElementById("number1").value;
    let numero2 = document.getElementById("number2").value;
    let informar = document.getElementById("informar");
    let soma = parseFloat(numero1) + parseFloat(numero2);
    
    informar.innerHTML = "Resultado:   " + soma.toFixed(2);
}

function media() {
    let numero1 = document.getElementById("number1").value;
    let numero2 = document.getElementById("number2").value;
    let numero3 = document.getElementById("number3").value;
    let numero4 = document.getElementById("number4").value;
    let informar = document.getElementById("informar");
    let media = (parseFloat(numero1) + parseFloat(numero2) + parseFloat(numero3) + parseFloat(numero4)) / 4;
    
    informar.innerHTML = "Resultado:   " + media.toFixed(2);
}
function trasformar() {
    let numero1 = document.getElementById("number1").value;
    let informar = document.getElementById("informar");
    let centimetro = parseFloat(numero1) * 100 ;
    
    informar.innerHTML = "medida(cm):   " + centimetro.toFixed(2);
}

function areaC() {
    let numero1 = document.getElementById("number1").value;
    let informar = document.getElementById("informar");
    let area = parseFloat(numero1) * parseFloat(numero1) * 3.14159 ;
    
    informar.innerHTML = "area:   " + area.toFixed(2) + "  cm2";
}

function areaQ() {
    let numero1 = document.getElementById("number1").value;
    let informar = document.getElementById("informar");
    let informar2 = document.getElementById("informar2")
    let area =parseFloat (numero1) * parseFloat(numero1);
    let area2 = area * 2;

    informar.innerHTML = "area:  " + area.toFixed(2) + "  cm2";
    informar2.innerHTML = "dobro da area:  " + area2.toFixed(2) + "  cm2";
}

function salario() {
    let numero1 = document.getElementById("number1").value;
    let numero2 = document.getElementById("number2").value;
    let informar = document.getElementById("informar");
    let salario =parseFloat (numero1) * parseFloat(numero2);
    
    informar.innerHTML = "salario:  R$" + salario.toFixed(2);
}

function trasformF() {
    let numero1 = document.getElementById("number1").value;
    let informar = document.getElementById("informar");
    let tempC = (numero1 - 32) * 5/9;

    informar.innerHTML = "temperatura em graus celcius:  " + tempC.toFixed(2) + "°C";
}

function trasformC() {
    let numero1 = document.getElementById("number1").value;
    let informar = document.getElementById("informar");
    let tempF = (9 / 5) * numero1 + 32;
    

    informar.innerHTML = "temperatura em graus fahrenheit:  " + tempF.toFixed(2) + "°F";
}

