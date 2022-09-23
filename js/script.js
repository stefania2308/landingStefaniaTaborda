console.log("Prueba")
var ejemplo1 = document.getElementById("imagen1")
var boton = document.getElementById("boton")

console.log(ejemplo1)
console.log(ejemplo1.attributes)

//Este es un comentario
boton.onclick = function (){
	alert("hola")
	ejemplo1.setAttribute("src","imagen1.png")
}

ejemplo1.onmouseover = function(){
	ejemplo1.setAttribute("width","800")
}

ejemplo1.onmouseout = function(){
	ejemplo1.setAttribute("width","500")
}

var color = document.getElementById("color")
color.onchange = function(){
	document.body.style.backgroundColor = color.value 
}
/*
comentario de
varias lineas
*/

//PIEDRA PAPEL Y TIJERA
var nombre1 = document.getElementById("nombre1")
var jugada1 = document.getElementById("jugada1")
var nombre2 = document.getElementById("nombre2")
var jugada2 = document.getElementById("jugada2")
var jugar = document.getElementById("jugar")
var resultado = document.getElementById("resultado")
var rival = document.getElementById("rival")
var nombrej2 = ""
var jugadaj2 = ""
var turno = document.getElementById("turno")

rival.onchange = function(){
   if (rival.value == "computador"){
   		var posibilidades = ["tijera", "piedra", "papel"]
		//Ordena la lista aleatoria
		posibilidades.sort(() => 0.5 - Math.random())
		posibilidades.sort(() => 0.5 - Math.random())
		posibilidades.sort(() => 0.5 - Math.random())
		nombrej2 = "computador"
		jugadaj2 = posibilidades[0]
	}
	else {
		turno.style.display = "block"
		nombrej2 = nombre2.value 
		jugadaj2 = jugada2.value
	}
	console.log(nombrej2)
	console.log(jugadaj2)
}




jugar.onclick = function () {
	texto = nombre1.value + " sacó " + 
			jugada1.value + " y " +
			nombrej2 + " sacó " +
			jugadaj2 + "<br> el resultado es ";
	if (jugada1.value == "tijera"){
		if (jugadaj2 == "tijera"){
			texto = texto + "empate"
		}
		else if (jugadaj2 =="papel"){
			texto = texto + "ganó " + nombre1.value	
		}
		else {
			texto = texto + "ganó " + nombrej2
		}
		
	}
	else if (jugada1.value == "papel"){
		if (jugadaj2 == "tijera"){
			texto = texto + "ganó " + nombrej2
		}
		else if (jugadaj2 =="papel"){
			texto = texto + "empate"
		}
		else {
			texto = texto + "ganó " + nombre1.value
		}		
	}
	else {
		if (jugadaj2 == "tijera"){
			texto = texto + "ganó " + nombre1.value
		}
		else if (jugadaj2 =="papel"){
			texto = texto + "ganó " + nombrej2
		}
		else {
			texto = texto + "empate"
		}		
	}

	resultado.innerHTML = texto
}

