/*=================================================================================
* 
* Se practica realizar gráficos usando Path2D() para crear Objetos y reutilizarlos
* más fácilmente
*
* =================================================================================
*/

dibujar = function(ctx) {
	var x = 400, y = 200;
	ctx.beginPath();

	var rectangulo = new Path2D();
	ctx.fillStyle = "rgb(200,0,0)";
	rectangulo.rect(x-50,y-50,100,100);

	// var rect2 = new Path2D(rectangulo);

	ctx.fill(rectangulo);
	// ctx.stroke(rect2);

}

inicio = function() {
	var canvas = document.getElementById("canvasMedio");
	if ( canvas.getContext ) {
		canvas.width = 800;
		canvas.height = 400;
		var ctx = canvas.getContext("2d");

		// Dibujar Smile
		dibujar(ctx);

	}
	else {
		alert("El navegador no soporta CANVAS");
	}
}