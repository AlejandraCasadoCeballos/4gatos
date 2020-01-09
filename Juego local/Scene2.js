class Scene2 extends Phaser.Scene{
    constructor(){
        super("Menu");
    }
    init(){
        
    }
    preload () //precargar recursos: sonidos e imágenes
    {
        this.load.audio('menu',['/Recursos/Musica/menu.mp3', '/Recursos/Musica/menu.ogg']); //hemos puesto dos tipos de formatos de música 
                                                                                            //por si el ordenador no puede usar alguno de ellos
        this.load.image('menuFondo','/Recursos/Interfaz/menu.jpg');//imagen menú normal
        this.load.image('pulsadoComoJugar','/Recursos/Interfaz/comoJugarPulsado.jpg');//imagen menú cuando estás sobre el botón de cómo jugar 
        this.load.image('pulsadoJugar','/Recursos/Interfaz/jugarPulsado.jpg');//imagen menú cuando estás sobre el botón de jugar
        this.load.image('pulsadoCreditos','/Recursos/Interfaz/creditosPulsado.jpg');//imagen menú cuando estás sobre el botón de créditos
        this.load.image('musicaOn','/Recursos/Interfaz/musicaOn.png');
        this.load.image('musicaOff','/Recursos/Interfaz/musicaOff.png');
    }

    create(){

    	//seteamos las variables a sus valores iniciales para que los objetos y jugadores no salgan con datos de anteriores partidas
    	escenarioUno=false;
        escenarioDos=false;
        escenarioTres=false;
        objetoCogido=false;
        objetoCogido2=false;
        generarPowerUp1 = Phaser.Math.Between(40, 30);
        generarPowerUp2 = Phaser.Math.Between(20, 5);
        colisionPowerUp=false;
        colisionPowerUp2=false;
        
    	im= this.physics.add.staticGroup(); 
        musica2=this.sound.add('menu');//para añadir la musica
        musica2.setLoop(true);//para que la musica suene en bucle
        musica2.play();//para que comience a sonar la musica
        
        const botonJugar = this.add.text(config.width/5,config.height/1.4,"Jugar", {font:"40px Courier", fill:"White"}).setOrigin(0.5,0.5);
        const botonCreditos = this.add.text(config.width/1.23,config.height/1.4,"Creditos", {font:"40px Courier", fill:"White"}).setOrigin(0.5,0.5);
        const botonComoJugar = this.add.text(config.width/2,config.height/1.4,"Como jugar", {font:"40px Courier", fill:"White"}).setOrigin(0.5,0.5);
        
        this.add.image(400, 300,'menuFondo');
        const botonMusica = im.create(740, 50, imMusica).setScale(0.1, 0.1);
        
        botonCreditos.setInteractive();
        botonJugar.setInteractive();
        botonComoJugar.setInteractive();
        botonMusica.setInteractive();

        //Distintas interaciones (pulsarlo,estar sobre él y dejar de estar sobre él) para cada botón del menú
        //En cada uno, al poner el ratón sobre el botón la imagen cambia a otra que tiene las letras de dicho botón de otro color
        //Al quitar el ratón, la imagen vuelve a ser la original. Al pulsar cada botón cambiamos a la escena correspondiente y paramos la música
        //BOTON JUGAR
        botonJugar.on('pointerdown', () => {this.scene.start("elegirEscenario"); musica2.pause();});
        botonJugar.on('pointerover', () => {this.add.image(400, 300,'pulsadoJugar');im.create(740, 50, imMusica).setScale(0.1, 0.1).refreshBody();});
        botonJugar.on('pointerout', () => {this.add.image(400, 300,'menuFondo');im.create(740, 50, imMusica).setScale(0.1, 0.1).refreshBody(); });
        //BOTON CRÉDITOS
        botonCreditos.on('pointerdown', () => { this.scene.start("Creditos"); musica2.pause();});
        botonCreditos.on('pointerover', () => {this.add.image(400, 300,'pulsadoCreditos');im.create(740, 50, imMusica).setScale(0.1, 0.1).refreshBody();});
        botonCreditos.on('pointerout', () => {this.add.image(400, 300,'menuFondo');im.create(740, 50, imMusica).setScale(0.1, 0.1).refreshBody(); });
        //BOTON CÓMO JUGAR
        botonComoJugar.on('pointerdown', () => { this.scene.start("ComoJugar"); musica2.pause();});
        botonComoJugar.on('pointerover', () => {this.add.image(400, 300,'pulsadoComoJugar');im.create(740, 50, imMusica).setScale(0.1, 0.1).refreshBody();});
        botonComoJugar.on('pointerout', () => {this.add.image(400, 300,'menuFondo');im.create(740, 50, imMusica).setScale(0.1, 0.1).refreshBody();});
        //BOTON MUSICA
        botonMusica.on('pointerdown', () => {
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
        botonMusica.on('pointerover', () => {});
        botonMusica.on('pointerout', () => {
        		
        	});
    }
    
    update()
    {
    	
    }
}