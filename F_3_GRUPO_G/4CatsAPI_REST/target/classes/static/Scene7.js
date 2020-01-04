class Scene7 extends Phaser.Scene{
    constructor(){
        super("Pausa");
    }

    init(){
        
    }
    preload () //precargar recursos
    {
        this.load.image('pausa','/Recursos/Interfaz/pausa.jpg');//imagen de cuando estamos en la escena de pausa
        this.load.image('botonPausaEncima','/Recursos/Interfaz/botonPausaEncima.jpg');//imagen cuando el ratón esá sobre el botón
        this.load.image('botonMenuEncima','/Recursos/Interfaz/botonMenuEncima.jpg');//imagen cuando el ratón esá sobre el botón
        this.load.image('musicaOn','/Recursos/Interfaz/musicaOn.png');
        this.load.image('musicaOff','/Recursos/Interfaz/musicaOff.png');

    }

    create(){
    	im= this.physics.add.staticGroup();
        const botonVolver = this.add.text(50, 530,"Atras",{font:"30px Courier", fill:"Red"});
        const botonMenu = this.add.text(680,530,"Menú",{font:"30px Courier", fill:"White"}); //cremos el botón de pausa
        
        this.add.image(400, 300,'pausa');//añade la imagen
        
        const botonMusica2 = im.create(740, 50, imMusica).setScale(0.1, 0.1);
        
        botonVolver.setInteractive();
        botonMenu.setInteractive();
        botonMusica2.setInteractive();
        //cuando le damos cambiamos a la escena de pausa, paramos la música y esta escena
        
        //Distintas interaciones (pulsarlo,estar sobre él y dejar de estar sobre él)
        //Al poner el ratón sobre el botón la imagen cambia a otra que tiene las letras de dicho botón de otro color
        //Al quitar el ratón, la imagen vuelve a ser la original. Al pulsar el botón volvemos a la escena de juego y se reinicia la música
        //BOTON MENÚ
        botonVolver.on('pointerdown', () => { this.scene.resume("Juego"); this.scene.stop(); musica.resume(); sonidoCuentaAtras.resume();});
        botonVolver.on('pointerover', () => {this.add.image(400, 300,'botonPausaEncima');im.create(740, 50, imMusica).setScale(0.1, 0.1).refreshBody(); });
        botonVolver.on('pointerout', () => {this.add.image(400, 300,'pausa');im.create(740, 50, imMusica).setScale(0.1, 0.1).refreshBody(); });

        botonMenu.on('pointerdown', () => {musica2.stop(); DELETEservidor(jugador);this.scene.stop("Juego"); this.gameOver(); this.scene.switch("Menu"); });
        botonMenu.on('pointerover', () => {this.add.image(400, 300,'botonMenuEncima');im.create(740, 50, imMusica).setScale(0.1, 0.1).refreshBody(); });
        botonMenu.on('pointerout', () => {this.add.image(400, 300,'pausa');im.create(740, 50, imMusica).setScale(0.1, 0.1).refreshBody(); });
        
      //BOTON MUSICA
        botonMusica2.on('pointerdown', () => {
        	if(sonidoOn==true){
            	this.sound.mute = true;
            	sonidoOn=false;
            	imMusica= "musicaOff";
        	}
        	else {
        		this.sound.mute = false;
            	sonidoOn=true;
            	imMusica= "musicaOn";
        	}
        	im.clear(true);
        	im.create(740, 50, imMusica).setScale(0.1, 0.1).refreshBody();
        	});
        botonMusica2.on('pointerover', () => {});
        botonMusica2.on('pointerout', () => {
        		
        	});
    }
    gameOver ()
    {   
        musica.stop();
        
        escenarioUno=false;
        escenarioDos=false;
        escenarioTres=false;
        objetoCogido=false;
        objetoCogido2=false;
        generarPowerUp1 = Phaser.Math.Between(40, 30);
        generarPowerUp2 = Phaser.Math.Between(20, 5);
        colisionPowerUp=false;
        colisionPowerUp2=false;
    }
    update(){
    	tiempoInactividad(this);
    	PUTservidor(jugador);
    	//GETservidor();
    }
}