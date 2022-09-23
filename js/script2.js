var mostrar = document.getElementById("mostrar")
var tamano = 100
lista = ["juan", "pedro", "maria", "ana", "sofia"]
texto = '<div class="row">'
//console.log(lista)
//console.log(lista[2])

ropa = [{
	nombre : "camisa",
		precio : 50000,
		imagen : "camisa.jpg"},
		{
			nombre : "pantalon",
		precio : 75000,
		imagen : "pantalon.jpg"},
		{
			nombre : "tenis",
		precio : 150000,
		imagen : "tenis.jpg"},
		{
			nombre : "chaqueta",
		precio : 100000,
		imagen : "chaqueta.jpg"}
		]
console.log(ropa)
console.log(ropa[2])
console.log(ropa[2].imagen)
for (i=0;i<4;i++){
	tarjeta = '<div class="col">\
			<div class="card" style="width: 18rem;">\
  			<img src="imagenes/'+ropa[i].imagen+'" class="card-img-top" alt="...">\
  			<div class="card-body">\
    		<h5 class="card-title">'+ropa[i].nombre+'</h5>\
    		<p class="card-text">'+ropa[i].precio+'</p>\
    		<select class="form-select" id="cantidad'+ropa[i].nombre+'">\
    <option value="0">0</option>\
    <option value="1">1</option>\
    <option value="2">2</option>\
    <option value="3">3</option>\
  </select> </select>   		</div>\
			</div></div>'	
	//texto = texto + "hola " + lista[i] + "<br>"
	texto = texto + tarjeta + "<br>"
	//console.log(texto)
}
mostrar.innerHTML = texto + '<div class="row"><button class="btn btn-primary" id="botoncomprar">Comprar</button>'

var cantidadcamisa = document.getElementById("cantidadcamisa")
var compra = document.getElementById("compra")
var botoncomprar = document.getElementById("botoncomprar")

botoncomprar.onclick = function(){
	textocomprar = ""
	valortotal = 0
	descuento = 0
	for (i=0;i<=3;i++){
		auxiliar = document.getElementById("cantidad"+ropa[i].nombre)
		if (auxiliar.value != 0){
			textocomprar += "compro "+ auxiliar.value + " " + ropa[i].nombre + " para un valor de " + auxiliar.value * ropa[i].precio +"<br>"
			valortotal += auxiliar.value * ropa[i].precio
		}
	if (valortotal >= 500000){
		descuento = valortotal * 0.2
		valortotal *= 0.8

	}

	}
	compra.innerHTML = "<h1>" + textocomprar + "<br> " +
						"Valor total a pagar: "+ valortotal +
						"<br>Descuento"+ descuento +"</h1>"
}

/*
cantidadcamisa.onchange = function(){
	valorcamisa = ropa[0].precio 
	total = valorcamisa * cantidadcamisa.value
	compra.innerHTML = "<h1>seleccionó " + cantidadcamisa.value + " camisas" +
						" con un precio unitario de " + valorcamisa + "y un precio total de " +
						total + " </h1><br>"


}
*/
var pais = document.getElementById("pais")
var ciudad = document.getElementById("ciudad")

colombia = ["Bogotá", "Medellín", "Pereira"]
argentina = ["Buenos Aires", "Cordoba", "Rosario"]
usa = ["Miami", "New York", "Los Angeles"]

pais.onchange = function(){
	if (pais.value == "colombia"){
		textoopcion= "<option></option>"
		for (i=0;i<3;i++){
			textoopcion = textoopcion + '<option>'+colombia[i]+'</opion>'
		}
	}
	else if (pais.value == "argentina"){
		textoopcion= ""
		for (i=0;i<3;i++){
			textoopcion = textoopcion + '<option>'+argentina[i]+'</opion>'
		}
	}
	else if (pais.value == "USA"){
		textoopcion= ""
		for (i=0;i<3;i++){
			textoopcion = textoopcion + '<option>'+usa[i]+'</opion>'
		}
	}
  ciudad.innerHTML = textoopcion
}

var grande = document.getElementById("grande")
grande.style.position = "fixed"
grande.style.top = "50px"
grande.style.right ="0px"

var pequeno = document.getElementById("pequeno")
pequeno.style.position = "fixed"
pequeno.style.top = "100px"
pequeno.style.right = "0px"
var invertir = document.getElementById("invertir")
var titulo = document.getElementById("titulo")
var titulos = document.getElementsByTagName("h1")
console.log(titulos)

titulo.onmouseover = function(){
	titulo.style.color = "red"
	titulo.style.fontFamily ="Times new Roman"
	titulos[1].innerHTML = "cambie el texto"
}

titulo.onmouseout = function(){
	titulo.style.color ="black"
}

grande.onclick = function (){
   tamano += 50
   document.body.style.fontSize = tamano+"%" 

   //grande.style.fontSize = "200%"
   //document.getElementsByTagName("p").style.fontSize ="200%"
   //grande.innerHTML = "otro texto"
}

pequeno.onclick = function (){
   tamano -= 50
   document.body.style.fontSize = tamano+"%" 
}

invertir.onclick = function (){
	document.body.style.backgroundColor = "black"
	document.body.style.color = "white"
}