var juego;

var Cartilla = function (con) 
{
	// Variables
	this.contexto = con;
	this.alto = 0;
	this.ancho = 0;	

    //Funciones
	this.dibujar();
	// this.mostrarCuadricula();
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
/*
	==========================================================================
	Función para practicar dibujar diferentes arcos
	==========================================================================
*/
Cartilla.prototype.dibujarCirculos = function () {
	var dibujo = this.contexto;

	dibujo.beginPath();

	// Circulo 1: Media naranja inferior
	dibujo.moveTo(440,20); // Punto inicial
	dibujo.fillStyle = "rgba(200,0,0,0.1)";	
	dibujo.arc(400,20,40,0,Math.PI); 

	// Circulo 2: Media naranja superior
	dibujo.moveTo(440,120); // Punto inicial
	dibujo.fillStyle = "rgba(200,0,0,0.1)";	
	dibujo.arc(400,120,40,0,Math.PI,true); 

	// Circulo 3: Tres cuartos de circunferencia
	dibujo.moveTo(440,120); // Punto inicial
	dibujo.fillStyle = "rgba(200,0,0,0.1)";	
	dibujo.arc(400,120,40,0,Math.PI,true); 


	dibujo.lineWidth = 3;
	dibujo.stroke();
}
/*
	==========================================================================
	Función de utilidad para dibujar cuadricula guia para el lienzo de canvas
	==========================================================================
*/
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
	=============================================
	Funcion que dibuja una carita mediante arcos
	=============================================
*/
Cartilla.prototype.smile = function () {
	var dibujo = this.contexto;

	dibujo.beginPath();
	// arc(x_centro,y_centro,radio,angulo_inicial,angulo_final,sentido_manecillas_reloj);
	dibujo.arc(240,200,80,0,Math.PI*2,true); // Contorno cara
	dibujo.moveTo(300,200);
	dibujo.arc(240,200,60,0,Math.PI); // boca sonrisa
	dibujo.moveTo(220,170);
	dibujo.arc(210,170,10,0,2*Math.PI);
	dibujo.moveTo(280,170);
	dibujo.arc(270,170,10,0,2*Math.PI);
	dibujo.fillStyle = "rgba(200,0,0,0.3)";
	dibujo.lineWidth = 10;
	dibujo.fill();
	dibujo.strokeStyle = "rgb(100,0,0)";
	dibujo.stroke();

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
		juego.mostrarCuadricula();
		juego.smile();
		juego.dibujarCirculos();
	}
	else {
		alert("Este navegador no soporta Canvas de HTML");
	}
}
