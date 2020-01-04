class Scene12 extends Phaser.Scene{
	
	constructor(){
        super("introducirNombre");
    }
    init(){
        
    }
 preload ()
 {
	 this.load.image('introducir nombre','/Recursos/Interfaz/introducir nombre.jpg');// cargamos la imagen de introducir nombre
	 this.load.image('introducir nombre pulsado','/Recursos/Interfaz/introducir nombre pulsado.jpg');// cargamos la imagen de los introducir nombre pulsado
     this.load.html('nameform','nameform.html');
     this.load.image('introducir nombre atras','/Recursos/Interfaz/introducir nombre atras pulsado.jpg');// cargamos la imagen de los introducir nombre pulsado
        
 }

 create ()
 {
	 var escena=this;
	 if(jugador.nombre!="")
		 this.empezarPartida(escena);
	 
	 musica2.resume();
	 const botonAtras = this.add.text(90, 540,"Atras",{font:"30px Courier", fill:"Red"}).setOrigin(0.5,0.5);
	 
	 this.add.image(400, 300,'introducir nombre');
   
	 this.input.on('dragstart', function (pointer, gameObject) {
		 this.bringToTop(gameObject);
	 }, this);

	 this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
		 gameObject.x = dragX;
		 gameObject.y = dragY;
	 });
 
	 var element=  this.add.dom(400,300, 'div',  'font: 30px Agency FB bold','phaser').createFromCache('nameform');
	 element.addListener("click");
  	 element.on("click", function (event) {
  		if (event.target.name === 'guardar')
     	{
    	 	nombre = this.getChildByName('nombre'); 
    	 	escena.empezarPartida(escena);
     	}    
     });
 
	 
	 botonAtras.setInteractive();
	 botonAtras.on('pointerdown', () => { DELETEservidor(jugador);musica2.stop();this.scene.start("Menu");});
     botonAtras.on('pointerover', () => {this.add.image(400, 300,'introducir nombre atras'); });
     botonAtras.on('pointerout', () => {this.add.image(400, 300,'introducir nombre'); });
     
}
    update(){
    	tiempoInactividad(this);
    }
    
    empezarPartida(escena){
    	PUTservidor(jugador);
    	musica2.stop(); 
    	escena.scene.start("elegirEscenario"); 
	 	prepararYEnviarJugador("", nombre.value);
	 	console.log(jugador.nombre);
    }
}