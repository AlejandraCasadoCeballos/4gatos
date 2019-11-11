class Scene1 extends Phaser.Scene{
    constructor(){
        super("Creditos");
    }

    init(){
        
    }
    preload () //precargar recursos
    {
        musica2.resume();
        this.load.image('creditos','/Recursos/Interfaz/creditos.jpg');
    }

    create(){
        const botonback = this.add.text(config.width/8, 7*config.height/8,"Atras",{font:"80px Courier", fill:"white"}).setOrigin(0.5,0.5);
        
        const creditos= this.add.image(400, 300,'creditos');

        botonback.setInteractive();
        /*
            pointerover
            pointerout
            pointerdown
            pointerup
        */
        //BOTON PLAY
        botonback.on('pointerdown', () => { this.scene.start("Menu"); musica2.pause();});
    }

}