function Suma(params) {
    numero1 = parseInt(document.getElementById("N1-Suma").value)    
    numero2 = parseInt(document.getElementById("N2-Suma").value)
    document.getElementById("Rsuma").innerHTML = numero1 + numero2;
    
}

function Restica(params) {
    numero1 = parseInt(document.getElementById("N1-Resta").value)    
    numero2 = parseInt(document.getElementById("N2-Resta").value)
    document.getElementById("Rresta").innerHTML = numero1 - numero2;
    
}

function multiplicacion(params) {
    numero1 = parseInt(document.getElementById("N1-Multi").value)    
    numero2 = parseInt(document.getElementById("N2-Multi").value)
    document.getElementById("Rmulti").innerHTML = numero1 * numero2;
    
}

function Division(params) {
    numero1 = parseInt(document.getElementById("N1-Divi").value)    
    numero2 = parseInt(document.getElementById("N2-Divi").value)
    document.getElementById("RDivi").innerHTML = numero1 / numero2;
    
}