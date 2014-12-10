var canvas =
 document.querySelector('canvas');
var ctx = canvas.getContext('2d');
ctx.fillStyle = 'black';
ctx.fillRect(0,0,600,500);

//-----------------------Dibujo de la nave-----------------------------//

var sc = 3 / 4

function drawShip(){
	ctx.fillStyle="#2EFE2E"
	ctx.fillRect(5,470,75,20);
	ctx.fillRect(10,465,65,5);
	ctx.fillRect(35,455,15,10);
	ctx.fillRect(40,450,5,5);
}


//--------------------Funciones del movimiento-------------------------// 

//-----------------------Eventos utilizados----------------------------// 

    
//--------------------Ejecución de las funciones ----------------------//

drawShip();