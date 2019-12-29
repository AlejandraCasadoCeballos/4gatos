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
        
 }

 create ()
 {
	 musica2.resume();
	 const botonAceptar = this.add.text(400, 355,"Aceptar",{font:"22px Courier", fill:"white"}).setOrigin(0.5,0.5);   
	 this.add.image(400, 300,'introducir nombre');
   
	 this.input.on('dragstart', function (pointer, gameObject) {
		 this.bringToTop(gameObject);
	 }, this);

	 this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
		 gameObject.x = dragX;
		 gameObject.y = dragY;
	 });
 
	 var element=  this.add.dom(400,300, 'div', 'phaser').createFromCache('nameform');
	 element.addListener("click");
  	 element.on("click", function (event) {
 	
  		if (event.target.name === 'guardar')
     	{
    	 	nombre = this.getChildByName('nombre'); 
     	}    
     });
 
    botonAceptar.setInteractive();
    botonAceptar.on('pointerdown', () => {musica2.stop(); this.scene.start("elegirEscenario"); prepararYEnviarJugador("", nombre.value);console.log(jugador.nombre);/*PUTnombreJugador(jugador);*/});
    botonAceptar.on('pointerover', () => {this.add.image(400, 300,'introducir nombre pulsado' );});
    botonAceptar.on('pointerout', () => {this.add.image(400, 300,'introducir nombre'); });
  
}
    update(){
    	PUTservidor(jugador);
    	tiempoInactividad(this);
    }
}