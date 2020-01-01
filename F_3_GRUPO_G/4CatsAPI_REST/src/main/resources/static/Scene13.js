class Scene13 extends Phaser.Scene{
	
	constructor(){
        super("salaEspera");
    }
    init(){
        
    }
 preload ()
 {
	 this.load.image('salaEspera','/Recursos/Interfaz/salaEspera.jpg');// cargamos la imagen de introducir nombre
	 this.load.image('salaEsperaAtrasPulsado','/Recursos/Interfaz/salaEsperaAtrasPulsado.jpg');// cargamos la imagen de los introducir nombre pulsado
     
        
 }

 create ()
 {
	 POSTsalaNueva(sala,jugador);
	 musica2.resume();
	 const botonAtras = this.add.text(90, 540,"Atras",{font:"30px Courier", fill:"Red"}).setOrigin(0.5,0.5);
	 this.add.image(400, 300,'salaEspera');
	 
	 botonAtras.setInteractive();
	 botonAtras.on('pointerdown', () => { this.scene.start("EligeGato");});
     botonAtras.on('pointerover', () => {this.add.image(400, 300,'salaEsperaAtrasPulsado'); });
     botonAtras.on('pointerout', () => {this.add.image(400, 300,'salaEspera'); });
 	}
    update(){
    	//POSTsalaNueva(sala);
    	GETunaSala(sala);
    	if(sala.completa)
    		this.scene.start("Mensaje");
    	PUTservidor(jugador);
    	tiempoInactividad(this);
    }
}