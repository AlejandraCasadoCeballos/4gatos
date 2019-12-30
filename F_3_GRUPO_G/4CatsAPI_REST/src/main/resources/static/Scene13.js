class Scene13 extends Phaser.Scene{
	
	constructor(){
        super("salaEspera");
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
	 const botonCrearSala = this.add.text(400, 155,"Crear Sala",{font:"22px Courier", fill:"white"}).setOrigin(0.5,0.5);   
	 const botonUnirseASala = this.add.text(400, 355,"Unirse a una sala",{font:"22px Courier", fill:"white"}).setOrigin(0.5,0.5);   
	 /*this.add.image(400, 300,'introducir nombre');
   
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
 	*/
	 botonCrearSala.setInteractive();
    //botonAceptar.on('pointerdown', () => {musica2.stop(); this.scene.start("elegirEscenario"); prepararYEnviarJugador("", nombre.value);console.log(jugador.nombre);/*PUTnombreJugador(jugador);*/});
	 botonCrearSala.on('pointerdown', () => {musica2.stop(); this.scene.start("elegirEscenario"); prepararYEnviarJugador("", nombre.value);console.log(jugador.nombre);/*PUTnombreJugador(jugador);*/});
	 //botonCrearSala.on('pointerover', () => {this.add.image(400, 300,'introducir nombre pulsado' );});
	 //botonCrearSala.on('pointerout', () => {this.add.image(400, 300,'introducir nombre'); });
	 
	 botonUnirseASala.setInteractive();
	 botonUnirseASala.on('pointerdown', () => {musica2.stop(); this.scene.start("elegirEscenario"); prepararYEnviarJugador("", nombre.value);console.log(jugador.nombre);/*PUTnombreJugador(jugador);*/});
	 //botonUnirseASala.on('pointerover', () => {this.add.image(400, 300,'introducir nombre pulsado' );});
	 //botonUnirseASala.on('pointerout', () => {this.add.image(400, 300,'introducir nombre'); });
  
}
    update(){
    	PUTservidor(jugador);
    	//tiempoInactividad(this);
    }
}