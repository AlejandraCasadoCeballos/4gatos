class Scene5 extends Phaser.Scene{
    constructor(){
        super("Fin");
    }

    init(){
        
    }
    preload () //precargar recursos
    {
        this.load.image('ganador1','/Recursos/Interfaz/ganadorMuffin.jpg');//imagen de cuando gana Muffin normal
        this.load.audio('celebracion','/Recursos/Musica/celebracion.mp3');//música de celebración
        this.load.image('atrasG1','/Recursos/Interfaz/atrasGanadorMuffin.jpg');//imagen cuando el ratón esá sobre el botón
        this.load.image('ganador2','/Recursos/Interfaz/ganadorMungojerry.jpg');//imagen de cuando gana Mungojerry normal
        this.load.image('atrasG2','/Recursos/Interfaz/atrasGanadorMungojerry.jpg');//imagen cuando el ratón esá sobre el botón
        this.load.image('empate','/Recursos/Interfaz/empate.jpg');//imagen de cuando empatan
        this.load.image('atrasEmpate','/Recursos/Interfaz/atrasEmpate.jpg');//imagen cuando el ratón esá sobre el botón
    
    }

    create(){
        musica3=this.sound.add('celebracion');//añade el sonido
        musica3.play();//activa el sonido
        const botonMenu = this.add.text(90, 540,"Atras",{font:"30px Courier", fill:"Red"}).setOrigin(0.5,0.5);
        botonMenu.setInteractive();
        if(ganadorUno){
        	this.add.image(400, 300,'ganador1');//añadde la imagen
        	ganadorUno=false;
            //Distintas interaciones (pulsarlo,estar sobre él y dejar de estar sobre él) 
            //Al poner el ratón sobre el botón la imagen cambia a otra que tiene las letras de dicho botón de otro color
            //Al quitar el ratón, la imagen vuelve a ser la original. Al pulsar el botón volvemos a la escena de menú
            //BOTON MENÚ
            botonMenu.on('pointerdown', () => { this.scene.start("Menu"); });
            botonMenu.on('pointerover', () => {this.add.image(400, 300,'atrasG1'); });
            botonMenu.on('pointerout', () => {this.add.image(400, 300,'ganador1'); });
        }
        else if(ganadorDos){
        	this.add.image(400, 300,'ganador2');//añade la imagen
        	ganadorDos=false;
            
            //Distintas interaciones (pulsarlo,estar sobre él y dejar de estar sobre él) 
            //Al poner el ratón sobre el botón la imagen cambia a otra que tiene las letras de dicho botón de otro color
            //Al quitar el ratón, la imagen vuelve a ser la original. Al pulsar el botón volvemos a la escena de menú
            //BOTON MENÚ
            botonMenu.on('pointerdown', () => { this.scene.start("Menu"); });
            botonMenu.on('pointerover', () => {this.add.image(400, 300,'atrasG2'); });
            botonMenu.on('pointerout', () => {this.add.image(400, 300,'ganador2'); });
        }
        else if(empate){
        	this.add.image(400, 300,'empate');//añade la imagen
            empate=false;
            
            //Distintas interaciones (pulsarlo,estar sobre él y dejar de estar sobre él) 
            //Al poner el ratón sobre el botón la imagen cambia a otra que tiene las letras de dicho botón de otro color
            //Al quitar el ratón, la imagen vuelve a ser la original. Al pulsar el botón volvemos a la escena de menú
            //BOTON MENÚ
            botonMenu.on('pointerdown', () => { this.scene.start("Menu"); });
            botonMenu.on('pointerover', () => {this.add.image(400, 300,'atrasEmpate'); });
            botonMenu.on('pointerout', () => {this.add.image(400, 300,'empate'); });
        }
        
    }
    update(){
    	//PUTservidor(jugador);
    	//GETservidor();
    	//tiempoInactividad(this);
    }

}