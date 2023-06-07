var numero = 0

function soma() {
    let numero = document.getElementById("num")
    var soma = numero++
    numero.innerText = soma
}

function sub() {

}

function resetar() {

}

function incrementarContador() {
    contador++;
    document.getElementById("contador").innerText = contador;
}