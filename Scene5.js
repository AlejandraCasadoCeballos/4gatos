class Scene5 extends Phaser.Scene{
    constructor(){
        super("Ganador1");
    }

    init(){
        
    }
    preload () //precargar recursos
    {
        this.load.image('ganador1','/Recursos/Interfaz/ganadorMuffin.jpg');//imagen de cuando gana Muffin normal
        this.load.audio('celebracion','/Recursos/Musica/celebracion.mp3');//música de celebración
        this.load.image('atrasG1','/Recursos/Interfaz/atrasGanadorMuffin.jpg');//imagen cuando el ratón esá sobre el botón
    }

    create(){
        musica3=this.sound.add('celebracion');//añade el sonido
        musica3.play();//activa el sonido
        const botonMenu = this.add.text(config.width/8, 7*config.height/8,"Menu",{font:"80px Courier", fill:"white"}).setOrigin(0.5,0.5);
        this.add.image(400, 300,'ganador1');//añadde la imagen

        botonMenu.setInteractive();

        //Distintas interaciones (pulsarlo,estar sobre él y dejar de estar sobre él) 
        //Al poner el ratón sobre el botón la imagen cambia a otra que tiene las letras de dicho botón de otro color
        //Al quitar el ratón, la imagen vuelve a ser la original. Al pulsar el botón volvemos a la escena de menú
        //BOTON MENÚ
        botonMenu.on('pointerdown', () => { this.scene.start("Menu"); });
        botonMenu.on('pointerover', () => {this.add.image(400, 300,'atrasG1'); });
        botonMenu.on('pointerout', () => {this.add.image(400, 300,'ganador1'); });
    }

}