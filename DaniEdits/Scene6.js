class Scene6 extends Phaser.Scene{
    constructor(){
        super("Ganador2");
    }

    init(){
        
    }
    preload () //precargar recursos
    {
        this.load.image('ganador2','assets/ganadorMungojerry.jpg');
        this.load.audio('celebracion','assets/celebracion.mp3');

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
        botonback.on('pointerover', () => { this.toYellow(botonback) });
        botonback.on('pointerout', () => { this.toWhite(botonback); });
    }

    toYellow(boton){
        boton.setStyle({ fill: 'Yellow'});
    }

    toWhite(boton){
        boton.setStyle({ fill: 'white'});
    }
}