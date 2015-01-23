var areaJuego;
var juego;
var contador = 0;
var dibujoBola = true;
var timeID;

var Cartilla = function (con) 
{
	// Variables
	this.contexto = con;
	this.alto = 0;
	this.ancho = 0;	

    //Funciones
	//this.dibujar();
	// this.mostrarCuadricula();
}

/*
	=========================================================================
	Función que realiza dibuja curvas de Bezier y Cuadrática
	=========================================================================
*/
Cartilla.prototype.curvasBezierCuadratica = function () {
	var dibujo = this.contexto;

	dibujo.beginPath();
	dibujo.moveTo(480,80);
	dibujo.fillStyle = "rgba(200,0,0,0.4)";

	// Dibujando curva Cuadrática
	// quadraticCurveTo(punto_control_x, punto_de_control_y, x, y);
	dibujo.quadraticCurveTo(490,0,600,80);
	dibujo.stroke();
	dibujo.fill();
	dibujo.closePath();


	// Dibujando curva de Bezier (dos puntos de control)
	// bezierCurveTo(puntoCX1, puntoCY1, puntoCX2, puntoCY2, x, y)
	dibujo.beginPath();
	dibujo.fillStyle = "rgba(200,0,200,0.5)";
	dibujo.moveTo(480,160);
	dibujo.bezierCurveTo(400,80,640,120,600,160);

	dibujo.stroke();
	dibujo.fill();
	dibujo.closePath();

	/* =============================================== */
	// Forma de Diálogo con curva Cuadrática
	dibujo.beginPath();
	dibujo.fillStyle = "rgba(200,0,0,0.5)";
	dibujo.lineWidth = 4;
	dibujo.moveTo(480,220);
	dibujo.quadraticCurveTo(480,180,540,180);
	dibujo.quadraticCurveTo(600,180,600,220);
	dibujo.quadraticCurveTo(610,270,520,260);
	dibujo.quadraticCurveTo(520,280,480,280);
	dibujo.quadraticCurveTo(520,280,500,260);
	dibujo.quadraticCurveTo(480,260,480,220);
	dibujo.fill();
	dibujo.stroke();
	dibujo.closePath();

	/* =============================================== */
	// Forma de Diálogo con curva de Bezier
	dibujo.beginPath();
	dibujo.fillStyle = "rgba(200,0,200,0.5)";
	dibujo.lineWidth = 4;
	dibujo.moveTo(480,340);
	dibujo.bezierCurveTo(480,260,600,260,600,340);
	dibujo.bezierCurveTo(600,360,580,380,520,380);
	dibujo.bezierCurveTo(520,380,520,400,480,400);
	dibujo.bezierCurveTo(520,380,480,380,480,340);
	dibujo.fill();
	dibujo.stroke();
	dibujo.closePath();

}

/*
	=========================================================================
	Función que realiza rectangulos tipo FILLRECT, STROKERECT y CLEARRECT
	=========================================================================
*/
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
	==============================================================================================
	Función para practicar dibujar diferentes arcos
	Parametros	conContorno: define si las figuras o formas llevan la linea de borde
				conRelleno:  define si las figuras se rellenarán con un color solido al interior
				colorRelleno: Si las figuras o formas van con relleno esta define cual color
				anchoLinea:  Grosor del contorno o borde de la figura
	==============================================================================================
*/
Cartilla.prototype.dibujarCirculos = function (conContorno,conRelleno,colorRelleno,anchoLinea) {
	var dibujo = this.contexto;

	dibujo.beginPath();
	dibujo.fillStyle = colorRelleno;	
	dibujo.lineWidth = anchoLinea;

	// Arco 1: Media naranja inferior
	dibujo.moveTo(440,40); // Punto inicial
	dibujo.arc(400,40,40,0,Math.PI); 

	// Arco 2: Media naranja superior
	dibujo.moveTo(440,160); // Punto inicial
	dibujo.arc(400,160,40,0,Math.PI,true); 

	// Arco 3: Tres cuartos de circunferencia
	dibujo.moveTo(440,240); // Punto inicial
	dibujo.arc(400,240,40,0,(1.5)*Math.PI,false); 

	// Arco 4: Cuarto de circunferencia
	dibujo.moveTo(420,360);
	dibujo.arc(380,360,40,0,1.5*Math.PI,true);

	if( conContorno ) {
		dibujo.stroke();  // Dibuja el contorno de la figura (no rellena la figura)
	}
	if ( conRelleno ) {
		dibujo.fill();    // Rellena la figuras o formas
	}
	
	dibujo.closePath();

}
/*
	==========================================================================
	Funciones que dibuja una animación de una circunferencia
	==========================================================================
*/
Cartilla.prototype.bolaEnMovimiento = function() {
	timeID = setInterval(dibujarCircunferencias,1000);
}

dibujarCircunferencias = function () {
	contador++;
	if( contador==5 ) {
		clearTimeout(timeID);
	}
	else {
		areaJuego.beginPath();
		areaJuego.moveTo(680,40);
		areaJuego.fillStyle = "#0D711A";
		areaJuego.arc(720,contador*80,40,0,2*Math.PI);
		areaJuego.fill();  // Relleno para que se vea la imagen
		areaJuego.closePath();		
	}
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
	Función que inicia el elemento canvas y la App
    ==================================================
*/
function inicio() {
	var canvas = document.getElementById("canvas");
	// Verficamos si el navegador a usar soporta canvas
	if( canvas.getContext )	{
		canvas.width = 800;
		canvas.height = 400;
		areaJuego = canvas.getContext("2d");
		juego = new Cartilla(areaJuego);
		juego.dibujar();
		juego.mostrarCuadricula();
		juego.smile();
		juego.dibujarCirculos(true,true,"rgba(0,0,200,0.3)",2);
		juego.curvasBezierCuadratica();		
		juego.bolaEnMovimiento();
	}
	else {
		alert("Este navegador no soporta Canvas de HTML");
	}
}
