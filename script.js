const frutas = ["laranja", "limão", "uva"];
let frutaLaranja = frutas[0]
let frutaLimao = frutas[1]
let frutaUva = frutas[2]

document.getElementById("fruta-1").innerHTML = `${frutaLaranja}`
document.getElementById("fruta-2").innerHTML = `${frutaLimao}`
document.getElementById("fruta-3").innerHTML = `${frutaUva}`


let imprimeValor = ()=>{console.log(document.getElementById("inputFruta4").value)}

let adicioneFruta4 =() =>{
    document.getElementById("fruta-4").innerHTML= document.getElementById("inputFruta4").value
}

