inicio = function() {
	var canvas = document.getElementById("inicioCanvas");
	if ( canvas.getContext ) {
		canvas.width = 800;
		canvas.height = 400;
		var ctx = canvas.getContext("2d");

		var x = 800/2, y = 400;

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
	}
	else {
		alert("El navegador no soporta CANVAS");
	}
}