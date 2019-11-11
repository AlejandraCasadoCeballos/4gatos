class Scene6 extends Phaser.Scene{
    constructor(){
        super("Ganador2");
    }

    init(){
        
    }
    preload () //precargar recursos
    {
        this.load.image('ganador2','/Recursos/Interfaz/ganadorMungojerry.jpg');
        this.load.audio('celebracion','/Recursos/Musica/celebracion.mp3');

    }

    create(){
        musica3=this.sound.add('celebracion');
        musica3.play();
        const botonback = this.add.text(config.width/8, 7*config.height/8,"Menu",{font:"80px Courier", fill:"white"}).setOrigin(0.5,0.5);
        this.add.image(400, 300,'ganador2');

        botonback.setInteractive();
        /*
            pointerover
            pointerout
            pointerdown
            pointerup
        */
        //BOTON PLAY
        botonback.on('pointerdown', () => { this.scene.start("Menu"); });
    }
}