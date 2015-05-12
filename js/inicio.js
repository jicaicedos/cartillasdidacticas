smile = function(ctx) {
		var x = ancho/2
		var y = alto;
		// alert("valor: "+x)

		ctx.beginPath();
		// arc(x_centro,y_centro,radio,angulo_inicial,angulo_final,sentido_manecillas_reloj);
		ctx.arc(x,200,80,0,Math.PI*2,true); // Contorno cara
		ctx.moveTo(x-60,200);
		ctx.arc(x,200,60,0,Math.PI); // boca sonrisa
		ctx.moveTo(x-10,170);
		ctx.arc(x-20,170,10,0,2*Math.PI);
		ctx.moveTo(x+30,170);
		ctx.arc(x+20,170,10,0,2*Math.PI);
		ctx.fillStyle = "rgba(200,0,0,0.3)";
		ctx.lineWidth = 4;
		ctx.fill();
		ctx.strokeStyle = "rgb(100,0,0)";
		ctx.stroke();
		ctx.closePath();
}

inicio = function() {
	ancho = 0
	alto = 0
	var canvas = document.getElementById("canvasInicio");
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
		smile(ctx);

	}
	else {
		alert("El navegador no soporta CANVAS");
	}
}