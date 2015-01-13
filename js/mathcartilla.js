var juego;

var Cartilla = function (con) 
{
	// Variables
	this.contexto = con;
	this.alto = 0;
	this.ancho = 0;	

    //Funciones
	this.dibujar();
	this.mostrarCuadricula();
}

Cartilla.prototype.dibujar = function() {
	var dibujo = this.contexto;

	// Dibujar marco de area de trabajo o pantalla canvas
	dibujo.beginPath();
	dibujo.moveTo(0,0);
	//dibujo.arc(150, 140, 40, 0, Math.PI * 2, false);
	dibujo.lineTo(0,0);
	dibujo.lineTo(800,0); // Linea horizontal superior
	dibujo.lineTo(800,400); // Linea horizontal superior
	dibujo.lineTo(0,400); // Linea horizontal superior
	dibujo.lineTo(0,0); // Linea horizontal superior
	dibujo.lineWidth = 5;
	dibujo.strokeStyle = "#000";
	dibujo.stroke();
	dibujo.closePath();

	// Dibujamos un par de rectángulos
	dibujo.fillStyle = "rgb(200,0,0)"; // Rectángulo rojo
	dibujo.fillRect(10,10,60,60);

	dibujo.fillStyle = "rgba(0,0,200,0.5)";  // Rectángulo azul
	dibujo.fillRect(40,40,70,70);

	// Tipos de rectángulo
	// fillRect(x, y, width, height)
	dibujo.fillStyle = "rgba(0,200,0,0.5)";  // Rectángulo verde
	dibujo.fillRect(10, 120, 60, 60);
	// strokeRect(x, y, width, height)
	dibujo.fillStyle = "rgb(0,200,0)";  // Rectángulo verde
	dibujo.strokeRect(10, 190, 60, 60);
	// clearRect(x, y, width, height)
	dibujo.fillStyle = "rgba(0,200,0,0.3)";  // Rectángulo verde de fondo al rectangulo "clearRect"
	dibujo.fillRect(10, 260, 80, 80);
	dibujo.clearRect(20, 270, 60, 60);

	// Dibujando un triángulo con líneas libres
	dibujo.beginPath();
	dibujo.moveTo(160,0);
	dibujo.lineTo(220,60);
	dibujo.lineTo(160,120);
	dibujo.fillStyle = "rgba(0,0,200,0.3)";
	dibujo.fill();
	dibujo.closePath();
}

Cartilla.prototype.mostrarCuadricula = function () {
	var dibujo = this.contexto;
	
	dibujo.beginPath();	
	// Líneas verticales
	for (var i = 40; i < 900; i+=40) {
		dibujo.moveTo(i,0);
	 	dibujo.lineTo(i,400);
	}
	// Líneas horizontales
	for (var i = 40; i < 400; i+=40) {
		dibujo.moveTo(0,i);
	 	dibujo.lineTo(900,i);
	}
	dibujo.lineWidth = 0.3;
	dibujo.strokeStyle = "#000";
	dibujo.stroke();
	dibujo.closePath();
}

/*  
    ==================================================
	Función que inicia el elemento canvas
    ==================================================
*/
function inicio() {
	var canvas = document.getElementById("canvas");
	// Verficamos si el navegador a usar soporta canvas
	if( canvas.getContext )	{
		canvas.width = 800;
		canvas.height = 400;
		var areaJuego = canvas.getContext("2d");
		juego = new Cartilla(areaJuego);
		//juego.dibujar();
		//juego.mostrarCuadricula();
	}
	else {
		alert("Este navegador no soporta Canvas de HTML");
	}
}
