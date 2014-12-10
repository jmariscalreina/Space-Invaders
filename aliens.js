var canvas =
 document.querySelector('canvas');
var ctx = canvas.getContext('2d');
ctx.fillStyle = 'black';
ctx.fillRect(0,0,600,500);

//-----------------------Dibujo de la nave-----------------------------//

function drawAlien1(){
	for(i=0; i<7; i++){
		ctx.fillStyle='white'
		ctx.fillRect(20+60*i,15,5,20);
		ctx.fillRect(15+60*i,20,5,10);
		ctx.fillRect(15+60*i,35,5,5);
		ctx.fillRect(20+60*i,40,5,5);
		ctx.fillRect(25+60*i,10,5,10);
		ctx.fillRect(25+60*i,25,5,5);
		ctx.fillRect(30+60*i,5,10,30);
		ctx.fillRect(40+60*i,10,5,10);
		ctx.fillRect(40+60*i,25,5,5);
		ctx.fillRect(45+60*i,15,5,20);
		ctx.fillRect(45+60*i,40,5,5);
		ctx.fillRect(50+60*i,20,5,10);
		ctx.fillRect(50+60*i,35,5,5);
	}
}

function drawAlien2(){
		ctx.fillStyle='white'
		ctx.fillRect(10+60*i,15,5,20);
		ctx.fillRect(5+60*i,20,5,10);
		ctx.fillRect(5+60*i,35,5,5);
		ctx.fillRect(10+60*i,40,5,5);
		ctx.fillRect(15+60*i,10,5,10);
		ctx.fillRect(15+60*i,25,5,5);
		ctx.fillRect(20+60*i,5,10,30);
		ctx.fillRect(30+60*i,10,5,10);
		ctx.fillRect(30+60*i,25,5,5);
		ctx.fillRect(35+60*i,15,5,20);
		ctx.fillRect(35+60*i,40,5,5);
		ctx.fillRect(40+60*i,20,5,10);
		ctx.fillRect(40+60*i,35,5,5);
}



//--------------------Funciones del movimiento-------------------------// 

//-----------------------Eventos utilizados----------------------------// 

    
//--------------------Ejecución de las funciones ----------------------//

drawAlien1();