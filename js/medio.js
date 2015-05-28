/*=================================================================================
* 
* Se practica realizar gráficos usando Path2D() para crear Objetos y reutilizarlos
* más fácilmente
*
* =================================================================================
*/

dibujar = function(ctx) {
	var x = ancho/2
	var y = alto;
	ctx.beginPath();

	var rectangulo = new Path2D();
	ctx.fillStyle = "rgb(200,0,0)";
	rectangulo.rect(x-50,150,x-300,100);

	// var rect2 = new Path2D(rectangulo);

	ctx.fill(rectangulo);
	// ctx.stroke(rect2);

}

inicio = function() {
	ancho = 0
	alto = 0
	var canvas = document.getElementById("canvasMedio");
	if ( canvas.getContext ) {
		ancho = document.getElementById("ancho")
		alto  = document.getElementById("alto")
		
		ancho = parseInt(ancho.innerHTML)
		alto = parseInt(alto.innerHTML)
		// alert(ancho + alto)
		canvas.width = ancho
		canvas.height = alto
		var ctx = canvas.getContext("2d");

		// Dibujar Smile
		dibujar(ctx);

	}
	else {
		alert("El navegador no soporta CANVAS");
	}
}